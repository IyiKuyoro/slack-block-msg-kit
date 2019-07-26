import { Helpers } from '../helpers';
import DialogSelectOption from './DialogSelectOption';

export default class DialogSelectOptionGroup {
  public label: string;
  public options: DialogSelectOption[];

  /**
   * @description Create a new instance of the option group
   * @param  {string} label The options group label
   * @param  {DialogSelectOption[]} options The options to be associated with this group
   */
  constructor(label: string, options: DialogSelectOption[]) {
    Helpers.validateString(label, 'label', 75);
    Helpers.validateArrayLength(options, 100, 'A group cannot have more than 100 options');
    Helpers.validateOptions(options);

    this.label = label;
    this.options = options;
  }
}
