export enum BlockType {
  section = 'section',
  divider = 'divider',
  image = 'image',
  actions = 'actions',
  context = 'context',
}

/**
 * @description This is the base class for other blocks like section and actions. You cannot create an instance of this class.
 * For more info regarding Blocks, kindly visit https://api.slack.com/reference/messaging/blocks
 */
export default abstract class Block {
  public type: BlockType;
  public block_id?: string;

  /**
   * @description Constructs a new block
   * @param  {BlockType} type The type of the block
   * @param  {string} blockId? A string acting as a unique identifier for this block
   */
  constructor(type: BlockType, blockId?: string) {
    if (blockId) {
      this.addBlockId(blockId);
    }

    this.type = type;
  }


  /**
   * @description Add or change blockId
   * @param  {string} blockId The unique identifier for this block
   */
  public addBlockId(blockId: string) {
    this.validateBlockId(blockId);
    this.block_id = blockId;
  }

  /**
   * @description validate the block id passed
   * @param  {string} blockId
   */
  private validateBlockId(blockId: string) {
    if (blockId.length > 255) {
      throw new Error('blockId cannot be more that 255 characters');
    }
  }
}
