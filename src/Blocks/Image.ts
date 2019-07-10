import Text, { TextType } from '../CompositionObjects/Text';
import { Helpers } from '../helpers';
import Block, { BlockType } from './Block';

/**
 * @description This is the image class.
 * For more info regarding Blocks, kindly visit https://api.slack.com/reference/messaging/blocks#image
 */
export default class Image extends Block {
  public image_url: string;
  public alt_text: string;
  public title?: Text;

  /**
   * @description Create a new instance of the image block
   * @param  {string} imageUrl The image url
   * @param  {string} altText The image alternative text
   * @param  {string} blockId? The block id
   */
  constructor(imageUrl: string, altText: string, blockId?: string) {
    super(BlockType.image, blockId);

    Helpers.validateString(imageUrl, 'imageUrl', 3000);
    Helpers.validateString(altText, 'altText', 2000);

    this.image_url = imageUrl;
    this.alt_text = altText;
  }

  /**
   * @description Add a title to the image
   * @param  {string} title The title of the image
   * @returns Image
   */
  public addTitle(title: string): Image {
    Helpers.validateString(title, 'title', 2000);
    this.title = new Text(TextType.plainText, title);

    return this;
  }
}
