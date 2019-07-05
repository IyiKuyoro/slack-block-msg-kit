import BlockElement, { BlockElementType } from './BlockElement';

/**
 * @description This is the class for creating image objects.
 * For more info regarding Images, kindly visit https://api.slack.com/reference/messaging/block-elements#image
 */
export default class ImageElement extends BlockElement {
  public image_url: string;
  public alt_text: string;

  /**
   * @description Creates a new instance of an image element
   * @param  {string} imageUrl The image url
   * @param  {string} altText The alt text
   */
  constructor(imageUrl: string, altText: string) {
    super(BlockElementType.image);

    this.image_url = imageUrl;
    this.alt_text = altText;
  }
}
