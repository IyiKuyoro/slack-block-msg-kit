import { BlockElementType } from './BlockElement';
import SelectElement from './SelectElement';

/**
 * @description This is the conversation select element class.
 * For more info regarding this, kindly visit https://api.slack.com/reference/messaging/block-elements#conversation-select
 */
export default class ConversationSelectElement extends SelectElement {
  public initial_conversation?: string;

  /**
   * @description Create an instance of the conversation select element
   * @param  {string} actionId The action id for the select element.
   * @param  {string} placeholder The select element placeholder
   */
  constructor(actionId: string, placeholder: string) {
    super(BlockElementType.selectConversation, actionId, placeholder);
  }

  /**
   * @description Add the initial user
   * @param  {string} initialConversationId The default selected user's slack id
   * @returns ConversationSelectElement
   */
  public addInitialConversation(initialConversationId: string): ConversationSelectElement {
    this.initial_conversation = initialConversationId;
    return this;
  }
}
