export enum TextType {
  plainText = 'plain_text',
  mrkdwn = 'mrkdwn',
}

/** This class represents a Slack TextObject.
 *  For more info kindly visit https://api.slack.com/reference/messaging/composition-objects#text
 */
export default class Text {
  public type: TextType;
  public text: string;
  public emoji?: boolean;
  public verbatim?: boolean;

  /**
   * @description Create a new text object
   * @param  {TextType} type The type of text object to be created
   * @param  {string} text The text string in the object
   * @param  {boolean} emoji? Does the text contain emojis?
   * @param  {boolean} verbatim? Should the text be rendered verbatim?
   */
  constructor(type: TextType, text: string, emoji?: boolean, verbatim?: boolean) {
    if (emoji !== undefined) {
      this.validateEmoji(type, emoji);
      this.emoji = emoji;
    }

    if (verbatim !== undefined) {
      this.validateVerbatim(type, verbatim);
      this.verbatim = verbatim;
    }

    this.type = type;
    this.text = text;
  }

  /**
   * @description Allow text to be rendered with emojis
   * @returns Text
   */
  public allowEmoji(): Text {
    this.validateEmoji(this.type, true);

    this.emoji = true;
    return this;
  }

  /**
   * @description Allow text to be displayed verbatim
   * @returns Text
   */
  public displayVerbatim(): Text {
    this.validateVerbatim(this.type, true);

    this.verbatim = true;
    return this;
  }

  /**
   * @description Ensure emoji is not being used with a plain text type.
   * @param  {TextType} type The type of the text object
   * @param  {boolean} emoji Wether or not emojis should be used
   * @returns void
   */
  private validateEmoji(type: TextType, emoji: boolean): void {
    if (type === TextType.mrkdwn && emoji === true) {
      throw new Error('You cannot use a emojis with mrkdwn type.');
    }
  }

  /**
   * @description Ensure user cannot use verbatim with plain_text
   * @param  {TextType} type The type of the text object
   * @param  {boolean} verbatim Wether or not the text should be rendered verbatim
   * @returns void
   */
  private validateVerbatim(type: TextType, verbatim: boolean): void {
    if (type === TextType.plainText && verbatim === true) {
      throw new Error('You cannot use verbatim with plain_text type.');
    }
  }
}
