import { Helpers } from '../helpers';
import { DialogElementType } from './DialogElement';
import DialogText from './DialogText';
import { DialogTextSubTypes } from './DialogTextElement';

/** This class represents a Textarea field of a slack dialog.
 *  For more info kindly visit https://api.slack.com/dialogs#attributes_textarea_elements
 */
export default class DialogTextareaElement extends DialogText {
  /**
   * @description Constructs a new instance of the DialogTextElement
   * @param  {string} label The label of the field
   * @param  {string} name The name of the field
   */
  constructor(label: string, name: string) {
    super(label, name, DialogElementType.textarea);
  }

  /**
   * @description Assign a max length to this field
   * @param  {number} maxLength The maximum length of the string
   * @returns DialogTextareaElement
   */
  public assignMaxLength(maxLength: number): DialogTextareaElement {
    Helpers.validateNumber('maxLength', maxLength, 3000, 0);

    this.max_length = maxLength;
    return this;
  }

  /**
   * @description Assign a minimum length to this field
   * @param  {number} minLength The minimum length of this field
   * @returns DialogTextareaElement
   */
  public assignMinLength(minLength: number): DialogTextareaElement {
    Helpers.validateNumber('minLength', minLength, 3000, 1);

    this.min_length = minLength;
    return this;
  }

  /**
   * @description Add a hint to the dialog field
   * @param  {string} hint The fields hint
   * @returns DialogTextareaElement
   */
  public addHint(hint: string): DialogTextareaElement {
    Helpers.validateString(hint, 'hint', 150);

    this.hint = hint;
    return this;
  }

  /**
   * @description Add a subtype to this field to offer some validation
   * @param  {DialogTextSubTypes} type The type of this text
   * @returns DialogTextareaElement
   */
  public addTextSubType(type: DialogTextSubTypes): DialogTextareaElement {
    this.subtype = type;

    return this;
  }

  /**
   * @description Add a default value to the text field
   * @param  {string} value The default value
   * @returns DialogTextareaElement
   */
  public setDefaultValue(value: string): DialogTextareaElement {
    Helpers.validateString(value, 'value', 3000);

    this.value = value;
    return this;
  }
}
