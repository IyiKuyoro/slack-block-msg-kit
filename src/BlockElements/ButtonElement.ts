import ConfirmationDialog from '../CompositionObjects/ConfirmationDialog';
import Text, { TextType } from '../CompositionObjects/Text';
import { Helpers } from '../helpers';
import BlockElement, { BlockElementType } from './BlockElement';

export enum ButtonStyle {
  primary = 'primary',
  danger = 'danger',
}

/**
 * @description This is the class for creating button objects.
 * For more info regarding button elements, kindly visit https://api.slack.com/reference/messaging/block-elements#button
 */
export default class ButtonElement extends BlockElement {
  public text: Text;
  public url?: string;
  public value?: string;
  public style?: ButtonStyle;
  public confirm?: ConfirmationDialog;

  /**
   * @description Creates a new instance of the button element class.
   * @param  {string} textString The string to be appended in the text object
   * @param  {string} actionId The action id for this button
   */
  constructor(textString: string, actionId: string, value?: string) {
    super(BlockElementType.button, actionId);

    if (value !== undefined) {
      Helpers.validateString(value, 'value', 2000);
      this.value = value;
    }

    Helpers.validateString(textString, 'textString', 75);
    this.text = new Text(TextType.plainText, textString);
  }

  /**
   * @description Add a url to the button
   * @param  {string} url The url to be loaded in the browser when the button is clicked
   * @returns ButtonElement
   */
  public addUrl(url: string): ButtonElement {
    Helpers.validateString(url, 'url', 3000);
    this.url = url;

    return this;
  }

  /**
   * @description Add value to the button payload
   * @param  {string} value The value to send along with the interaction payload
   * @returns ButtonElement
   */
  public addValue(value: string): ButtonElement {
    Helpers.validateString(value, 'value', 2000);
    this.value = value;

    return this;
  }

  /**
   * @description Change the style of the button from the default style
   * @param  {ButtonStyle} style Can either be primary or danger
   */
  public changeStyle(style: ButtonStyle): ButtonElement {
    this.style = style;

    return this;
  }

  /**
   * @description Add a confirmation dialog by providing the parameters that is displayed when the button is clicked.
   * This method will create the confirmation dialog. If you want full control over how the dialog is created we suggest (addConfirmationDialog).
   * @param  {string} dialogTitle The message to be displayed in the dialog
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
  ): ButtonElement {
    this.confirm = new ConfirmationDialog(dialogTitle, dialogText, confirmButton, denyButton);

    return this;
  }

  // /**
  //  * @description Add a confirmation dialog that is displayed when the button is clicked.
  //  * This method gives you the flexibility to add emojis to the text.
  //  * @param  {ConfirmationDialog} confirmationDialog
  //  * @returns ButtonElement
  //  */
  // public addConfirmationDialog(confirmationDialog: ConfirmationDialog): ButtonElement {
  //   this.confirm = confirmationDialog;

  //   return this;
  // }
}
