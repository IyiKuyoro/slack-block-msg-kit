import { BlockElementType } from './BlockElement';
import SelectElement from './SelectElement';

/**
 * @description This is the user select element class.
 * For more info regarding this, kindly visit https://api.slack.com/reference/messaging/block-elements#users-select
 */
export default class UserSelectElement extends SelectElement {
  public initial_user?: string;

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
}
