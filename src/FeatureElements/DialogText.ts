import DialogElement from './DialogElement';
import { DialogTextSubTypes } from './DialogTextElement';

export default abstract class DialogText extends DialogElement {
  public max_length?: number;
  public min_length?: number;
  public hint?: string;
  public subtype?: DialogTextSubTypes;
}
