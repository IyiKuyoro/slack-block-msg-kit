import ImageElement from '../BlockElements/ImageElement';
import Text from '../CompositionObjects/Text';
import Block, { BlockType } from './Block';

/**
 * @description This is the Context class.
 * For more info regarding Blocks, kindly visit https://api.slack.com/reference/messaging/blocks#context
 */
export default class Context extends Block {
  public elements: (ImageElement | Text)[];

  /**
   * @description Create a new context object
   * @param  {ImageElement[]|Text[]} elements An array of elements to be added in the context.
   * @param  {string} blockId? The block_id to be assigned to this block
   */
  constructor(elements: (ImageElement | Text)[], blockId?: string) {
    super(BlockType.context, blockId);

    if (elements.length > 10) {
      throw new Error('Context elements cannot be more than 10.');
    }

    this.elements = elements;
  }

  /**
   * @description Add elements to the context
   * @param  {ImageElement[]|Text[]} elements
   * @returns Context
   */
  public addElements(elements: (ImageElement | Text)[]): Context {
    if (this.elements.length + elements.length > 10) {
      throw new Error('Context elements cannot be more than 10.');
    }

    this.elements.push(...elements);

    return this;
  }
}
