import BlockElement from '../BlockElements/BlockElement';
import Text from '../CompositionObjects/Text';
import { Helpers } from '../helpers';
import Block, { BlockType } from './Block';

/**
 * @description This is a section class for creating section blocks.
 * For more info regarding section blocks, kindly visit https://api.slack.com/reference/messaging/blocks#section
 */
export default class Section extends Block {
  public text: Text;
  public fields?: Text[];
  public accessory?: BlockElement;

  constructor(text: Text, blockId?: string) {
    // Assign a blockId is one is passed
    if (blockId !== undefined) {
      super(BlockType.section, blockId)
    } else {
      super(BlockType.section)
    }

    Helpers.validateString(text.text, 'Text string', 3000);
    this.text = text;
  }

  /**
   * @description Add a text object to the array of text fields
   * @param  {Text} text The test object to be added
   * @returns Section
   */
  public addField(text: Text): Section {
    // Because fields is nullable, we have to first check that it is truthy
    if (this.fields && this.fields.length >= 10) {
      throw new Error('You cannot have more than 10 Text objects in section fields.');
    }

    // Because fields is nullable, we have to first create it if it does not exist
    if (!this.fields) {
      this.fields = [];
    }

    Helpers.validateString(text.text, 'Text string', 2000);
    this.fields.push(text);
    return this;
  }

  /**
   * @description Add an Block Element as the section accessory
   * @param  {BlockElement} text The test object to be added
   * @returns Section
   */
  public addAccessory(element: BlockElement): Section {
    this.accessory = element;
    return this;
  }
}
