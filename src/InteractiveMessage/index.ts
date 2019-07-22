import Block from '../Blocks/Block';

/**
 * @description This is an interactive message class for creating slack interactive messages
 * For more info regarding interactive messages, kindly visit https://api.slack.com/reference/messaging/payload
 */
export default class InteractiveMessage {
  public text: string;
  public blocks?: Block[];
  public thread_ts?: string;
  public mrkdwn?: boolean;

  /**
   * @description Create an instance of an interactive message
   * @param  {string} text The fallback text to be displayed
   * @param  {boolean=true} isMrkdwn Should the text be displayed as markdown?
   * @param  {Block[]} blocks? Blocks to be added to the message. This will override the text.
   */
  constructor(text: string, isMrkdwn: boolean = true, blocks?: Block[]) {
    this.text = text;
    this.mrkdwn = isMrkdwn;
    if (blocks) {
      this.blocks = blocks;
    }
  }

  /**
   * @description Add a new block to the message
   * @param  {Block} block The block to be added
   * @returns InteractiveMessage
   */
  public addBlock(block: Block): InteractiveMessage {
    if (this.blocks) {
      this.blocks.push(block);
    } else {
      this.blocks = [];
      this.blocks.push(block);
    }

    return this;
  }

  /**
   * @description Add a this message to a thread.
   * @param  {string} parentMessageTimestamp the parent message's time stamp
   * @returns InteractiveMessage
   */
  public addAddThreadTimeStamp(parentMessageTimestamp: string): InteractiveMessage {
    this.thread_ts = parentMessageTimestamp;
    return this;
  }
}
