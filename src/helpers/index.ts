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
}
