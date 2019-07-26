import { Helpers } from '../helpers';
import { DialogElementType } from './DialogElement';
import DialogText from './DialogText';

export enum DialogTextSubTypes {
  email = 'email',
  number = 'number',
  tel = 'tel',
  url = 'url',
}

/** This class represents a Text field of a slack dialog.
 *  For more info kindly visit https://api.slack.com/dialogs#text_elements
 */
export default class DialogTextElement extends DialogText {
  /**
   * @description Constructs a new instance of the DialogTextElement
   * @param  {string} label The label of the field
   * @param  {string} name The name of the field
   */
  constructor(label: string, name: string) {
    super(label, name, DialogElementType.text);
  }

  /**
   * @description Assign a max length to this field
   * @param  {number} maxLength The maximum length of the string
   * @returns DialogTextElement
   */
  public assignMaxLength(maxLength: number): DialogTextElement {
    Helpers.validateNumber('maxLength', maxLength, 150, 0);

    this.max_length = maxLength;
    return this;
  }

  /**
   * @description Assign a minimum length to this field
   * @param  {number} minLength The minimum length of this field
   * @returns DialogTextElement
   */
  public assignMinLength(minLength: number): DialogTextElement {
    Helpers.validateNumber('minLength', minLength, 150, 1);

    this.min_length = minLength;
    return this;
  }

  /**
   * @description Add a hint to the dialog field
   * @param  {string} hint The fields hint
   * @returns DialogTextElement
   */
  public addHint(hint: string): DialogTextElement {
    Helpers.validateString(hint, 'hint', 150);

    this.hint = hint;
    return this;
  }

  /**
   * @description Add a subtype to this field to offer some validation
   * @param  {DialogTextSubTypes} type The type pf this text
   * @returns DialogTextElement
   */
  public addTextSubType(type: DialogTextSubTypes): DialogTextElement {
    this.subtype = type;

    return this;
  }

  /**
   * @description Add a default value to the text field
   * @param  {string} value The default value
   * @returns DialogTextElement
   */
  public setDefaultValue(value: string): DialogTextElement {
    Helpers.validateString(value, 'value', 150);

    this.value = value;
    return this;
  }
}
