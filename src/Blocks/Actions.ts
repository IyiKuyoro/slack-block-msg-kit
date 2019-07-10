import BlockElement from '../BlockElements/BlockElement';
import ImageElement from '../BlockElements/ImageElement';
import Block, { BlockType } from './Block';

/**
 * @description This is the Actions class.
 * For more info regarding Blocks, kindly visit https://api.slack.com/reference/messaging/blocks#actions
 */
export default class Actions extends Block {
  public elements: BlockElement[];

  /**
   * @description Create a new actions block
   * @param  {BlockElement[]} elements An array of elements to be added to the block.
   * @param  {string} blockId? The block id of the actions block
   */
  constructor(elements: BlockElement[], blockId?: string) {
    super(BlockType.actions, blockId);

    this.validateElements(elements);
    this.validateActionIds(elements);
    if (elements.length > 5) {
      throw new Error('Actions element cannot be more than 5.');
    }
    this.elements = elements;
  }

  /**
   * @description Add elements to the array of elements in the action
   * @param  {BlockElement[]} elements The array of elements to be added
   * @returns Actions
   */
  public addElements(elements: BlockElement[]): Actions {
    this.validateElements(elements);
    this.validateActionIds([...this.elements, ...elements]);

    if (this.elements.length + elements.length > 5) {
      throw new Error('Actions element cannot be more than 5.');
    }

    this.elements.push(...elements);
    return this;
  }

  /**
   * @description Validate the action ids
   */
  private validateActionIds(elements: BlockElement[]): void {
    const actionIds: { [k: string]: boolean } = {};

    for (const element of elements) {
      const id = element.action_id;

      if (id) {
        if (actionIds[id] || '') {
          throw new Error(`Action Id '${id}' has a conflict in the list of elements`);
        }

        actionIds[id] = true;
      }
    }
  }

  /**
   * @description Ensure that no image element is passed
   * @param  {BlockElement[]} elements The elements to be validated
   */
  private validateElements(elements: BlockElement[]): void {
    for (const element of elements) {
      if (element instanceof ImageElement) {
        throw new Error('Image elements cannot be used in actions block');
      }
    }
  }
}
