import Option from '../CompositionObjects/Option';
import DialogSelectOption from '../FeatureElements/DialogSelectOption';

export class Helpers {
  /**
   * @description Ensure that number is valid
   * @param  {string} param The parameter name
   * @param  {number} num The number to be validated
   * @param  {number} max The maximum number expected
   */
  public static validateNumber(param: string, num: number | string, max: number, min: number) {
    if (!/^\d+$/.test(num.toString())) {
      throw new Error(`${param} must be a positive integer`);
    }
    if (num <= min || num > max) {
      throw new Error(`${param} must be a positive integer less than ${max} and greater than ${min}`);
    }
  }

  /**
   * @description Validate a strings character length
   * @param  {string} param The parameter to be validated
   * @param  {string} paramName The parameter name
   * @param  {number} characterLength The character length
   */
  public static validateString(param: string, paramName: string, characterLength: number): void {
    if (param.length > characterLength) {
      throw new Error(`${paramName} should not be more than ${characterLength} characters.`);
    }
  }

  /**
   * @description Ensure thant no two options have the same value
   * @param  {Option[]} options
   * @returns void
   */
  public static validateOptions(options: Option[] | DialogSelectOption[]): void {
    const optionsValues: { [k: string]: boolean } = {};

    for (const option of options) {
      const value = option.value;

      if (optionsValues[value]) {
        throw new Error(`Two options cannot share the same value in one group: '${value}'`);
      }

      optionsValues[value] = true;
    }
  }

  /**
   * @description Ensure an array is larger than expected
   * @param  {any[]} array The array to be tested
   * @param  {number} maxLength The expected max length of the array
   * @param  {string} errorMsg The error message to be displayed if the condition is not met
   * @returns void
   */
  public static validateArrayLength(array: any[], maxLength: number, errorMsg: string): void {
    if (array.length > maxLength) {
      throw new Error(errorMsg);
    }
  }
}
