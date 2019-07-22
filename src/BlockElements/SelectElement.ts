import ConfirmationDialog from '../CompositionObjects/ConfirmationDialog';
import Text, { TextType } from '../CompositionObjects/Text';
import { Helpers } from '../helpers';
import BlockElement, { BlockElementType } from './BlockElement';

/**
 * @description This is the base class for other select elements like static select. You cannot create an instance of this class.
 * For more info regarding select elements, kindly visit https://api.slack.com/reference/messaging/block-elements#select
 */
export default abstract class SelectElement extends BlockElement {
  public placeholder: Text;
  public confirm?: ConfirmationDialog;

  /**
   * @description Create a new instance of a select element.
   * @param  {string} elementType The select element type
   * @param  {string} actionId The action id for the select element
   * @param  {string} placeholder The select element placeholder
   */
  constructor(elementType: BlockElementType, actionId: string, placeholder: string) {
    super(elementType, actionId);

    Helpers.validateString(placeholder, 'placeholder', 150);

    this.placeholder = new Text(TextType.plainText, placeholder);
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
  ): SelectElement {
    this.confirm = new ConfirmationDialog(dialogTitle, dialogText, confirmButton, denyButton);

    return this;
  }
}
