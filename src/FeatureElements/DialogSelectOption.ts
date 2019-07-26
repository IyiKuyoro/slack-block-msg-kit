import { Helpers } from '../helpers';

export default class DialogSelectOption {
  public label: string;
  public value: string;

  /**
   * @description Create a new instance of the option class
   * @param  {string} label The option label
   * @param  {string} value The option value
   */
  constructor(label: string, value: string) {
    Helpers.validateString(label, 'label', 75);
    Helpers.validateString(value, 'value', 75);

    this.label = label;
    this.value = value;
  }
}
