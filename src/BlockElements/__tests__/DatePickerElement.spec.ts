import Text, { TextType } from '../../CompositionObjects/Text';
import DatePickerElement from '../DatePickerElement';

describe('DatePickerElement', () => {
  it('should create a new date picker object', () => {
    const datePicker = new DatePickerElement('ACT001');

    expect(datePicker).toEqual({
      action_id: 'ACT001',
      type: 'datepicker',
    });
  });

  describe('addPlaceholder()', () => {
    it('should add a placeholder text', () => {
      const datePicker = new DatePickerElement('ACT001');

      datePicker.addPlaceholder('placeholder');

      expect(datePicker).toEqual({
        action_id: 'ACT001',
        placeholder: {
          text: 'placeholder',
          type: 'plain_text',
        },
        type: 'datepicker',
      });
    });
  });

  describe('addInitialDate()', () => {
    it('should assign an initial date', () => {
      const datePicker = new DatePickerElement('ACT001');

      datePicker.addInitialDate(2024, 2, 29);

      expect(datePicker).toEqual({
        action_id: 'ACT001',
        initial_date: '2024-02-29',
        type: 'datepicker',
      });
    });

    it('should throw year invalid error', done => {
      try {
        const datePicker = new DatePickerElement('ACT001');

        datePicker.addInitialDate(19, 2, 29);
      } catch (error) {
        expect(error.message).toEqual('Year must have four digits');
        done();
      }
    });

    it('should throw month invalid error', done => {
      try {
        const datePicker = new DatePickerElement('ACT001');

        datePicker.addInitialDate(2019, 13, 29);
      } catch (error) {
        expect(error.message).toEqual('Month out of range');
        done();
      }
    });

    it('should throw month invalid error', done => {
      try {
        const datePicker = new DatePickerElement('ACT001');

        datePicker.addInitialDate(2019, 12, 33);
      } catch (error) {
        expect(error.message).toEqual('Day out of range');
        done();
      }
    });

    it('should throw only leap years can have 29 days in feb', done => {
      try {
        const datePicker = new DatePickerElement('ACT001');

        datePicker.addInitialDate(2019, 2, 29);
      } catch (error) {
        expect(error.message).toEqual('Only leap years have 29 days in February');
        done();
      }
    });

    it('should throw day out of bound error', done => {
      try {
        const datePicker = new DatePickerElement('ACT001');

        datePicker.addInitialDate(2019, 4, 31);
      } catch (error) {
        expect(error.message).toEqual('Day out of month range');
        done();
      }
    });
  });

  describe('addConfirmationDialogByParameters()', () => {
    it('should add a confirmation dialog', () => {
      const datePicker = new DatePickerElement('ACT001');

      datePicker.addConfirmationDialogByParameters('Confirm', new Text(TextType.plainText, 'dialog text'), 'Yes', 'No');

      expect(datePicker.confirm).toEqual({
        confirm: {
          text: 'Yes',
          type: 'plain_text',
        },
        deny: {
          text: 'No',
          type: 'plain_text',
        },
        text: {
          text: 'dialog text',
          type: 'plain_text',
        },
        title: {
          text: 'Confirm',
          type: 'plain_text',
        },
      });
    });
  });
});
