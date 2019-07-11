import { Helpers } from '../helpers';
import Option from './Option';
import Text, { TextType } from './Text';

/** This class represents a Slack Option.
 *  For more info kindly visit https://api.slack.com/reference/messaging/composition-objects#option-group
 */
export default class OptionGroup {
  public label: Text;
  public options: Option[];

  /**
   * @description Create an option group
   * @param  {string} label The label displayed above the group of options
   * @param  {Option[]} options An array of options to be displayed
   */
  constructor(label: string, options: Option[]) {
    Helpers.validateString(label, 'label', 75);

    if (options.length > 100) {
      throw new Error('Cannot have more than 100 options in a group');
    }
    this.validateOptions(options);

    this.label = new Text(TextType.plainText, label);
    this.options = options;
  }

  /**
   * @description Ensure thant no two options have the same value
   * @param  {Option[]} options
   * @returns void
   */
  private validateOptions(options: Option[]): void {
    const optionsValues: { [k: string]: boolean } = {};

    for (const option of options) {
      const value = option.value;

      if (optionsValues[value]) {
        throw new Error(`Two options cannot share the same value in one group: '${value}'`);
      }

      optionsValues[value] = true;
    }
  }
}
