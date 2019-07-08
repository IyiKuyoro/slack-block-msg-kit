import { Helpers } from '../helpers';
import Text, { TextType } from './Text';

/** This class represents a Slack ConfirmDialog Object.
 *  For more info kindly visit https://api.slack.com/reference/messaging/composition-objects#confirm
 */
export default class ConfirmationDialog {
  public title: Text;
  public text: Text;
  public confirm: Text;
  public deny: Text;

  /**
   * @description Creates a new instance of a confirmation dialog
   * @param  {string} dialogTitle The dialog title
   * @param  {Text} dialogText The text to be rendered as the dialog message
   * @param  {string} confirmButton The text to be rendered in the confirm button
   * @param  {string} denyButton The text to be rendered in the deny button
   */
  constructor(dialogTitle: string, dialogText: Text, confirmButton: string, denyButton: string) {
    Helpers.validateString(dialogTitle, 'dialogTitle', 100);
    Helpers.validateString(dialogText.text, 'dialogText', 300);
    Helpers.validateString(confirmButton, 'confirmButton', 30);
    Helpers.validateString(denyButton, 'denyButton', 30);

    this.title = new Text(TextType.plainText, dialogTitle);
    this.text = dialogText;
    this.confirm = new Text(TextType.plainText, confirmButton);
    this.deny = new Text(TextType.plainText, denyButton);
  }

  // /**
  //  * @description Display emojis in title
  //  * @returns ConfirmationDialog
  //  */
  // public recogniseTitleEmoji(): ConfirmationDialog {
  //   this.title.allowEmoji();
  //   return this;
  // }

  // /**
  //  * @description Display emojis in the text
  //  * @returns ConfirmationDialog
  //  */
  // public recogniseTextEmoji(): ConfirmationDialog {
  //   this.text.allowEmoji();
  //   return this;
  // }

  // /**
  //  * @description Display message body as is without any conversions
  //  * @returns ConfirmationDialog
  //  */
  // public displayTextVerbatim(): ConfirmationDialog {
  //   this.text.displayVerbatim();
  //   return this;
  // }

  // /**
  //  * @description Display emojis in the confirmation button
  //  * @returns ConfirmationDialog
  //  */
  // public recogniseConfirmButtonEmoji(): ConfirmationDialog {
  //   this.confirm.allowEmoji();
  //   return this;
  // }

  // /**
  //  * @description Display emojis in the deny button
  //  * @returns ConfirmationDialog
  //  */
  // public recogniseDenyButtonEmoji(): ConfirmationDialog {
  //   this.deny.allowEmoji();
  //   return this;
  // }
}
