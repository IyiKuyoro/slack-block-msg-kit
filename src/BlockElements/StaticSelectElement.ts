import ConfirmationDialog from '../CompositionObjects/ConfirmationDialog';
import Option from '../CompositionObjects/Option';
import OptionGroup from '../CompositionObjects/OptionGroup';
import Text from '../CompositionObjects/Text';
import { Helpers } from '../helpers';
import { BlockElementType } from './BlockElement';
import SelectElement from './SelectElement';

/**
 * @description This is the static select element class.
 * For more info regarding static select elements, kindly visit https://api.slack.com/reference/messaging/block-elements#static-select
 */
export default class StaticSelectElement extends SelectElement {
  public options?: Option[];
  public option_groups?: OptionGroup[];
  public initial_option?: Option;
  public confirm?: ConfirmationDialog;

  /**
   * @description Create an instance of the static select element
   * @param  {string} actionId The action id for the select element.
   * @param  {string} placeholder The select element placeholder
   */
  constructor(actionId: string, placeholder: string) {
    super(BlockElementType.selectStatic, actionId, placeholder);
  }

  /**
   * @description Add options to the select menu
   * @param  {Option[]} options An array of options
   * @param  {number} initialOptionIndex? The index of the option to be selected from the group
   * @returns StaticSelectElement
   */
  public addOptions(options: Option[], initialOptionIndex?: number): StaticSelectElement {
    if (this.option_groups) {
      throw new Error('StaticSelectElement cannot have both options and option_groups');
    }

    Helpers.validateArrayLength(options, 100, 'Cannot have more than 100 options');
    Helpers.validateOptions(options);

    this.options = options;
    this.assignInitialOptionOptions(options, initialOptionIndex);

    return this;
  }

  /**
   * @description Add options groups to this select element
   * @param  {OptionGroup[]} optionGroups An array of option groups
   * @param  {number} initialOptionGroupIndex? The index of the option group to select the option from
   * @param  {number} initialOptionIndex? The index of the option to be selected from the group
   * @returns StaticSelectElement
   */
  public addOptionGroups(
    optionGroups: OptionGroup[],
    initialOptionGroupIndex?: number,
    initialOptionIndex?: number,
  ): StaticSelectElement {
    if (this.options) {
      throw new Error('StaticSelectElement cannot have both options and option_groups');
    }

    Helpers.validateArrayLength(optionGroups, 100, 'Cannot have more than 100 optionGroups');

    this.option_groups = optionGroups;
    this.assignInitialOptionOptionGroups(optionGroups, initialOptionGroupIndex, initialOptionIndex);

    return this;
  }

  /**
   * @description Add a confirmation dialog by providing the parameters that is displayed when an option is selected.
   * This method will create the confirmation dialog.
   * @param  {string} dialogTitle The dialog title
   * @param  {Text} dialogText The message to be displayed in the dialog
   * @param  {string} confirmButton The confirm button label text
   * @param  {string} denyButton The deny button text
   * @returns ButtonElement
   */
  public addConfirmationDialogByParameters(
    dialogTitle: string,
    dialogText: Text,
    confirmButton: string,
    denyButton: string,
  ): StaticSelectElement {
    this.confirm = new ConfirmationDialog(dialogTitle, dialogText, confirmButton, denyButton);

    return this;
  }

  /**
   * @description Assigns the initial option property for option group
   * @param  {OptionGroup[]} optionGroups The array of option groups
   * @param  {number} initialOptionGroupIndex? The index of the option group to select the option from
   * @param  {number} initialOptionIndex? The index of the option to be selected from the group
   */
  private assignInitialOptionOptionGroups(
    optionGroups: OptionGroup[],
    initialOptionGroupIndex?: number,
    initialOptionIndex?: number,
  ): void {
    if (initialOptionGroupIndex !== undefined && initialOptionIndex !== undefined) {
      if (optionGroups[initialOptionGroupIndex] && optionGroups[initialOptionGroupIndex].options[initialOptionIndex]) {
        this.initial_option = optionGroups[initialOptionGroupIndex].options[initialOptionIndex];
      } else if (!optionGroups[initialOptionGroupIndex]) {
        throw new Error('initialOptionGroupIndex is out of optionGroup range');
      } else {
        throw new Error('initialOptionIndex is out of options range');
      }
    }
  }

  /**
   * @description Assign initial option for options
   * @param  {Option[]} options The array of options
   * @param  {number} initialOptionIndex? The option index
   */
  private assignInitialOptionOptions(options: Option[], initialOptionIndex?: number) {
    if (initialOptionIndex !== undefined && options[initialOptionIndex]) {
      this.initial_option = options[initialOptionIndex];
    } else if (initialOptionIndex !== undefined && !options[initialOptionIndex]) {
      throw new Error('initialOptionIndex must be a positive integer less than the options length');
    }
  }
}
