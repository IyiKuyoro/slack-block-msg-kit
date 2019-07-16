import ConfirmationDialog from '../CompositionObjects/ConfirmationDialog';
import Text, { TextType } from '../CompositionObjects/Text';
import { Helpers } from '../helpers';
import BlockElement, { BlockElementType } from './BlockElement';

/**
 * @description This is the date picker element class.
 * For more info regarding this, kindly visit https://api.slack.com/reference/messaging/block-elements#datepicker
 */
export default class DatePickerElement extends BlockElement {
  public placeholder?: Text;
  public initial_date?: string;
  public confirm?: ConfirmationDialog;

  /**
   * @description Create a new instance of the date picker class
   * @param  {string} actionId The action id of this element
   */
  constructor(actionId: string) {
    super(BlockElementType.datePicker, actionId);
  }

  /**
   * @description Add a placeholder text
   * @param  {string} placeholder The placeholder text
   * @returns DatePickerElement
   */
  public addPlaceholder(placeholder: string): DatePickerElement {
    Helpers.validateString(placeholder, 'placeholder', 150);

    this.placeholder = new Text(TextType.plainText, placeholder);
    return this;
  }

  /**
   * @description Add an initially selected date to the date picker
   * @param  {number} year The date to be pre selected
   * @param  {number} month The date to be pre selected
   * @param  {number} day The date to be pre selected
   * @returns DatePickerElement
   */
  public addInitialDate(year: number, month: number, day: number): DatePickerElement {
    this.validateRegex(/^[0-9]{4}$/, year.toString(), 'Year must have four digits');
    this.validateRegex(/(^1[0-2]$)|(^[1-9]{1}$)/, month.toString(), 'Month out of range');
    this.validateRegex(/(^[1-9]$)|(^[1-2][0-9]?$)|(^3[0-1]$)/, day.toString(), 'Day out of range');

    this.validateDay(year, month, day);

    this.initial_date = `${year}-${month < 10 ? 0 : ''}${month}-${day < 10 ? 0 : ''}${day}`;
    return this;
  }

  /**
   * @description Add a confirmation dialog by providing the parameters that is displayed when an option is selected.
   * This method will create the confirmation dialog.
   * @param  {string} dialogTitle The dialog title
   * @param  {Text} dialogText The message to be displayed in the dialog
   * @param  {string} confirmButton The confirm button label text
   * @param  {string} denyButton The deny button text
   * @returns ButtonElement
   */
  public addConfirmationDialogByParameters(
    dialogTitle: string,
    dialogText: Text,
    confirmButton: string,
    denyButton: string,
  ): DatePickerElement {
    this.confirm = new ConfirmationDialog(dialogTitle, dialogText, confirmButton, denyButton);

    return this;
  }

  /**
   * @description validate a regular expression
   * @param  {RegExp} regex The regex pattern
   * @param  {string} param The parameter to be validated
   * @param  {string} error The error message to display
   */
  private validateRegex(regex: RegExp, param: string, error: string) {
    if (!regex.test(param)) {
      throw new Error(error);
    }
  }

  /**
   * @description validate a day in the year
   * @param  {number} year The year
   * @param  {number} month The month
   * @param  {number} day The day
   */
  private validateDay(year: number, month: number, day: number) {
    this.validateLongMonths(day, month);
    this.validateLeapYear(year, month, day);
  }

  /**
   * @description validate last february day in leap year
   * @param  {number} year The year
   * @param  {number} month The month
   * @param  {number} day The day
   */
  private validateLeapYear(year: number, month: number, day: number) {
    const yearDiff = year - 2020;

    if (yearDiff % 4 !== 0 && month === 2 && day === 29) {
      throw new Error('Only leap years have 29 days in February');
    }
  }

  /**
   * @description Validate last day of long months
   * @param  {number} day The day
   * @param  {number} month The month
   */
  private validateLongMonths(day: number, month: number) {
    const longMonths = [1, 3, 5, 7, 8, 10, 12];
    if (day > 30 && longMonths.indexOf(month) < 0) {
      throw new Error('Day out of month range');
    }
  }
}
