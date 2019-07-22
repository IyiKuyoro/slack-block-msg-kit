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
    Helpers.validateArrayLength(options, 100, 'Cannot have more than 100 options in a group');
    Helpers.validateOptions(options);

    this.label = new Text(TextType.plainText, label);
    this.options = options;
  }
}
