import { Helpers } from '../helpers';
import DialogElement, { DialogElementType } from './DialogElement';
import DialogSelectOption from './DialogSelectOption';
import DialogSelectOptionGroup from './DialogSelectOptionGroup';

export enum DialogSelectDataSource {
  users = 'users',
  channels = 'channels',
  conversations = 'conversations',
  external = 'external',
}

/** This class represents a select field of a slack dialog.
 *  For more info kindly visit https://api.slack.com/dialogs#dynamic_select_elements
 */
export default class DialogSelectElement extends DialogElement {
  public data_source?: DialogSelectDataSource;
  public min_query_length?: number;
  public selected_options?: DialogSelectOption;
  public options?: DialogSelectOption[];
  public option_groups?: DialogSelectOptionGroup[];

  /**
   * @description Constructs a new instance of the DialogSelectElement
   * @param  {string} label The label of the field
   * @param  {string} name The name of the field
   */
  constructor(label: string, name: string) {
    super(label, name, DialogElementType.select);
  }

  /**
   * @description Change the data source from static
   * @param  {DialogSelectDataSource} newSource The new data source
   * @returns DialogSelectElement
   */
  public changeDataSource(newSource: DialogSelectDataSource): DialogSelectElement {
    this.data_source = newSource;
    return this;
  }

  /**
   * @description Change add a min query length to an external data source
   * @param  {number} minLength The minimum string length before your app is queried for the data
   * @returns DialogSelectElement
   */
  public addMinQueryLength(minLength: number): DialogSelectElement {
    if (this.data_source !== DialogSelectDataSource.external) {
      throw new Error('Only external data sources require a min query length');
    }

    Helpers.validateNumber('minLength', minLength, 75, 0);
    this.min_query_length = minLength;
    return this;
  }

  /**
   * @description Add a selected option to be used as the default selected option when the menu is loaded
   * @param  {DialogSelectOption} option The default selected option
   * @returns DialogSelectElement
   */
  public addSelectedOption(option: DialogSelectOption): DialogSelectElement {
    this.selected_options = option;

    return this;
  }

  /**
   * @description Add options to the select menu
   * @param  {DialogSelectOption[]} options An array of options to be added
   * @returns DialogSelectElement
   */
  public addOptions(options: DialogSelectOption[]): DialogSelectElement {
    if (this.option_groups) {
      throw new Error('Cannot have options and option_groups in the same select menu');
    }

    if (!this.options) {
      Helpers.validateArrayLength(options, 100, 'Total options cannot be more than 100');
      Helpers.validateOptions(options);
      this.options = options;
    } else {
      const totOpt = [...this.options, ...options];
      Helpers.validateArrayLength(totOpt, 100, 'Total options cannot be more than 100');
      Helpers.validateOptions(totOpt);
      this.options.push(...options);
    }

    return this;
  }

  /**
   * @description Add a list of option groups to the menu
   * @param  {DialogSelectOptionGroup[]} optionGroups An array of option groups
   * @returns DialogSelectElement
   */
  public addOptionsGroup(optionGroups: DialogSelectOptionGroup[]): DialogSelectElement {
    if (this.options) {
      throw new Error('Cannot have options and option_groups in the same select menu');
    }

    if (!this.option_groups) {
      Helpers.validateArrayLength(optionGroups, 100, 'Cannot have more than 100 option groups');
      this.option_groups = optionGroups;
    } else {
      Helpers.validateArrayLength(
        [...this.option_groups, ...optionGroups],
        100,
        'Cannot have more than 100 option groups',
      );
      this.option_groups.push(...optionGroups);
    }

    return this;
  }
}
