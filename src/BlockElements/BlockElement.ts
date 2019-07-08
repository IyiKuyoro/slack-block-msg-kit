export enum BlockElementType {
  image = 'image',
  button = 'button',
  selectStatic = 'static_select',
  selectExternal = 'external_select',
  selectUser = 'users_select',
  selectConversation = 'conversations_select',
  selectChannel = 'channels_select',
  overflow = 'overflow',
  datePicker = 'datepicker',
}

/**
 * @description This is the base class for other block elements like image and button. You cannot create an instance of this class.
 * For more info regarding Block Elements, kindly visit https://api.slack.com/reference/messaging/block-elements
 */
export default abstract class BlockElement {
  /**
   * @description Constructs a new block element
   * @param  {BlockElementType} type The type of the block element being created
   */
  constructor(public type: BlockElementType) {}
}
