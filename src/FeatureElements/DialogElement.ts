import { Helpers } from '../helpers';

export enum DialogElementType {
  text = 'text',
  textarea = 'textarea',
  select = 'select',
}

export default abstract class DialogElement {
  public label: string;
  public name: string;
  public type: DialogElementType;
  public placeholder?: string;
  public optional?: boolean;
  public value?: string;

  /**
   * @description Create a new instance of the Dialog Element
   * @param  {string} label The elements label
   * @param  {string} name The name of the element
   * @param  {DialogElementType} type The type of the element
   */
  constructor(label: string, name: string, type: DialogElementType) {
    Helpers.validateString(label, 'label', 48);
    Helpers.validateString(name, 'name', 300);

    this.label = label;
    this.name = name;
    this.type = type;
  }

  /**
   * @description Add a placeholder to the dialog element
   * @param  {string} placeholder The string to be used as placeholder
   * @returns DialogElement
   */
  public addPlaceholder(placeholder: string): DialogElement {
    Helpers.validateString(placeholder, 'placeholder', 150);

    this.placeholder = placeholder;
    return this;
  }

  /**
   * @description Make this field optional
   * @returns DialogElement
   */
  public makeFieldOptional(): DialogElement {
    this.optional = true;
    return this;
  }
}
