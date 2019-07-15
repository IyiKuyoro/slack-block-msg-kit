import ConfirmationDialog from '../CompositionObjects/ConfirmationDialog';
import Text from '../CompositionObjects/Text';
import { BlockElementType } from './BlockElement';
import SelectElement from './SelectElement';

/**
 * @description This is the user select element class.
 * For more info regarding static select elements, kindly visit https://api.slack.com/reference/messaging/block-elements#users-select
 */
export default class UserSelectElement extends SelectElement {
  public initial_user?: string;
  public confirm?: ConfirmationDialog;

  /**
   * @description Create an instance of the user select element
   * @param  {string} actionId The action id of the select element
   * @param  {string} placeholder The placeholder text of the select element
   */
  constructor(actionId: string, placeholder: string) {
    super(BlockElementType.selectUser, actionId, placeholder);
  }

  /**
   * @description Add the initial user
   * @param  {string} initialUserId The default selected user's slack id
   * @returns UserSelectElement
   */
  public addInitialUser(initialUserId: string): UserSelectElement {
    this.initial_user = initialUserId;
    return this;
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
  ): UserSelectElement {
    this.confirm = new ConfirmationDialog(dialogTitle, dialogText, confirmButton, denyButton);

    return this;
  }
}
