import { Helpers } from '../helpers';
import Text, { TextType } from './Text';

/** This class represents a Slack Option.
 *  For more info kindly visit https://api.slack.com/reference/messaging/composition-objects#option
 */
export default class Option {
  public text: Text;
  public value: string;
  public url?: string;

  /**
   * @description Create a new instance of the option class
   * @param  {string} text The text to be used in creating the Text object
   * @param  {string} value The value to be returned to your application when this option is selected
   */
  constructor(text: string, value: string) {
    Helpers.validateString(text, 'text', 75);
    Helpers.validateString(value, 'value', 75);

    this.text = new Text(TextType.plainText, text);
    this.value = value;
  }

  /**
   * @description Add url parameter to the Option
   * @param  {string} url URL to be loaded in the browser when this option is selected
   * @returns Option
   */
  public addUrl(url: string): Option {
    Helpers.validateString(url, 'url', 3000);

    this.url = url;
    return this;
  }
}
