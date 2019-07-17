import Block, { BlockType } from './Block';

/**
 * @description This is the divider class.
 * For more info regarding this, kindly visit https://api.slack.com/reference/messaging/blocks#divider
 */
export default class Divider extends Block {
  /**
   * @description Create a new instance of the divider class
   * @param  {string} blockId? The block id
   */
  constructor(blockId?: string) {
    super(BlockType.divider, blockId);
  }
}
