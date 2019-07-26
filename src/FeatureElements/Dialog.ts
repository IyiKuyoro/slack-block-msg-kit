import { Helpers } from '../helpers';
import DialogElement from './DialogElement';

/** This class represents a Slack Dialog.
 *  For more info kindly visit https://api.slack.com/dialogs
 */
export default class Dialog {
  public title: string;
  public callback_id: string;
  public elements: DialogElement[];
  public state?: string;
  public submit_label?: string;
  public notify_on_cancel?: boolean;

  /**
   * @description Create a new instance of a slack dialog
   * @param  {string} title The title of the dialog
   * @param  {string} callbackId The call back id of the dialog actions
   * @param  {DialogElement[]} elements The dialog elements to be added in the dialog
   */
  constructor(title: string, callbackId: string, elements: DialogElement[]) {
    Helpers.validateString(title, 'title', 24);
    Helpers.validateString(callbackId, 'callbackId', 255);
    Helpers.validateArrayLength(elements, 10, 'Cannot have more than 10 elements in a dialog');

    if (elements.length <= 0) {
      throw Error('You need to add at least one element to the dialog');
    }

    this.title = title;
    this.callback_id = callbackId;
    this.elements = elements;
  }

  /**
   * @description Add a state string to the dialog
   * @param  {string} state A string that will be sent back to your app when the dialog is submitted
   * @returns Dialog
   */
  public addState(state: string): Dialog {
    this.state = state;
    return this;
  }

  /**
   * @description Change the submit button text from the default
   * @param  {string} submitLabel
   * @returns Dialog
   */
  public changeSubmitLabel(submitLabel: string): Dialog {
    Helpers.validateString(submitLabel, 'submitLabel', 48);

    this.submit_label = submitLabel;
    return this;
  }

  /**
   * @description Opt to have your app notified when if the user cancels the dialog
   * @returns Dialog
   */
  public notifyOnCancel(): Dialog {
    this.notify_on_cancel = true;
    return this;
  }
}
