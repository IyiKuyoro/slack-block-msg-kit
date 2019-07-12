import Option from '../CompositionObjects/Option';

export class Helpers {
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
  public static validateOptions(options: Option[]): void {
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
