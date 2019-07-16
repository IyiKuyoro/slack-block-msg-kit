import SelectElement from "./SelectElement";
import { BlockElementType } from './BlockElement';
import Option from "../CompositionObjects/Option";

/**
 * @description This is the base class for external data source like static select.
 * For more info regarding select elements, kindly visit https://api.slack.com/reference/messaging/block-elements#external-select
 */
export default class ExternalSelectElement extends SelectElement {
  public initial_option?: Option;
  public min_query_length?: Number;

    /**
   * @description Create a new instance of a select element.
   * @param  {string} placeholder The select element placeholder
   * @param  {string} actionId The action id for the select element
   */
  constructor(actionId: string, placeholder: string) {
    super(BlockElementType.selectExternal, actionId, placeholder);
  }

  /**
   * @description Add Initial option to the External select class element
   * @param {Option} initial_option select option
   * @returns UserSelectElement
   */
  public addInitialOption(initialOption: Option): ExternalSelectElement {
    this.initial_option = initialOption;
    return this;
  }

  /**
   * @description Add min_query_length to the External select class element
   * @param {number} minQueryLength The length of the min query
   * @returns UserSelectElement
   */
  public addMinQueryLength(minQueryLength: number): ExternalSelectElement {
    if (minQueryLength <= 0) {
      throw new Error('minQueryLength should be greater than 0.');
    }
    this.min_query_length = minQueryLength;
    return this;
  }
}