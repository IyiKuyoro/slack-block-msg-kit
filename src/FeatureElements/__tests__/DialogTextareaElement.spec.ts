import DialogTextareaElement from '../DialogTextareaElement';
import { DialogTextSubTypes } from '../DialogTextElement';

describe('DialogTextareaElement', () => {
  it('should create a dialog textarea', () => {
    const textarea = new DialogTextareaElement('Reason', 'reason');

    expect(textarea).toEqual({
      label: 'Reason',
      name: 'reason',
      type: 'textarea',
    });
  });

  describe('assignMaxLength', () => {
    it('should add a max length to the string', () => {
      const textarea = new DialogTextareaElement('Reason', 'reason');

      textarea.assignMaxLength(50);

      expect(textarea).toEqual({
        label: 'Reason',
        max_length: 50,
        name: 'reason',
        type: 'textarea',
      });
    });
  });

  describe('assignMinLength', () => {
    it('should add a min length to the string', () => {
      const textarea = new DialogTextareaElement('Reason', 'reason');

      textarea.assignMinLength(50);

      expect(textarea).toEqual({
        label: 'Reason',
        min_length: 50,
        name: 'reason',
        type: 'textarea',
      });
    });
  });

  describe('addHint', () => {
    it('should add a hint text', () => {
      const textarea = new DialogTextareaElement('Reason', 'reason');

      textarea.addHint('A sample hint');

      expect(textarea).toEqual({
        hint: 'A sample hint',
        label: 'Reason',
        name: 'reason',
        type: 'textarea',
      });
    });
  });

  describe('addTextSubType', () => {
    it('should add a subtype', () => {
      const textarea = new DialogTextareaElement('Reason', 'reason');

      textarea.addTextSubType(DialogTextSubTypes.number);

      expect(textarea).toEqual({
        label: 'Reason',
        name: 'reason',
        subtype: 'number',
        type: 'textarea',
      });
    });
  });

  describe('setDefaultValue', () => {
    it('should add a default value', () => {
      const textarea = new DialogTextareaElement('Reason', 'reason');

      textarea.setDefaultValue('example@email.com');

      expect(textarea).toEqual({
        label: 'Reason',
        name: 'reason',
        type: 'textarea',
        value: 'example@email.com',
      });
    });
  });
});
