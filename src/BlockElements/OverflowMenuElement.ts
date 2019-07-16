import ConfirmationDialog from '../CompositionObjects/ConfirmationDialog';
import Option from '../CompositionObjects/Option';
import Text from '../CompositionObjects/Text';
import { Helpers } from '../helpers';
import BlockElement, { BlockElementType } from './BlockElement';

/**
 * @description This is the overflow menu element class.
 * For more info regarding this, kindly visit https://api.slack.com/reference/messaging/block-elements#overflow
 */
export default class OverflowMenuElement extends BlockElement {
  public options: Option[];
  public confirm?: ConfirmationDialog;

  /**
   * @description Create new overflow menu element
   * @param  {string} actionId The action id of the overflow menu
   * @param  {Option[]} options An array of options to be added to the menu
   */
  constructor(actionId: string, options: Option[]) {
    super(BlockElementType.overflow, actionId);

    this.validateOptionsLength(options);
    Helpers.validateOptions(options);

    this.options = options;
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
  ): OverflowMenuElement {
    this.confirm = new ConfirmationDialog(dialogTitle, dialogText, confirmButton, denyButton);

    return this;
  }

  /**
   * @description Ensure option is of the right size
   * @param  {Option[]} options
   */
  private validateOptionsLength(options: Option[]) {
    if (options.length < 2) {
      throw new Error('Minimum of two options allowed');
    } else if (options.length > 5) {
      throw new Error('Maximum of five options allowed');
    }
  }
}
