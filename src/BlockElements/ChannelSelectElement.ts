import { BlockElementType } from './BlockElement';
import SelectElement from './SelectElement';

/**
 * @description This is the channel select element class.
 * For more info regarding this, kindly visit https://api.slack.com/reference/messaging/block-elements#channel-select
 */
export default class ChannelSelectElement extends SelectElement {
  public initial_channel?: string;
  /**
   * @description Create an instance of the channel select element
   * @param  {string} actionId The action id for the select element.
   * @param  {string} placeholder The select element placeholder
   */
  constructor(actionId: string, placeholder: string) {
    super(BlockElementType.selectChannel, actionId, placeholder);
  }

  /**
   * @description Add the initial channel
   * @param  {string} initialConversationId The default selected channel's slack id
   * @returns ChannelSelectElement
   */
  public addInitialChannel(initialChannelId: string): ChannelSelectElement {
    this.initial_channel = initialChannelId;
    return this;
  }
}
