import DialogTextElement, { DialogTextSubTypes } from '../DialogTextElement';

describe('TextDialogElement', () => {
  it('should create a dialog text element', () => {
    const text = new DialogTextElement('Name', 'name');

    expect(text).toEqual({
      label: 'Name',
      name: 'name',
      type: 'text',
    });
  });

  describe('assignMaxLength', () => {
    it('should add a max length to the string', () => {
      const text = new DialogTextElement('Name', 'name');

      text.assignMaxLength(50);

      expect(text).toEqual({
        label: 'Name',
        max_length: 50,
        name: 'name',
        type: 'text',
      });
    });
  });

  describe('assignMinLength', () => {
    it('should add a min length to the string', () => {
      const text = new DialogTextElement('Name', 'name');

      text.assignMinLength(50);

      expect(text).toEqual({
        label: 'Name',
        min_length: 50,
        name: 'name',
        type: 'text',
      });
    });
  });

  describe('addHint', () => {
    it('should add a hint text', () => {
      const text = new DialogTextElement('Name', 'name');

      text.addHint('A sample hint');

      expect(text).toEqual({
        hint: 'A sample hint',
        label: 'Name',
        name: 'name',
        type: 'text',
      });
    });
  });

  describe('addTextSubType', () => {
    it('should add a subtype', () => {
      const email = new DialogTextElement('Email', 'email');

      email.addTextSubType(DialogTextSubTypes.email);

      expect(email).toEqual({
        label: 'Email',
        name: 'email',
        subtype: 'email',
        type: 'text',
      });
    });
  });

  describe('setDefaultValue', () => {
    it('should add a default value', () => {
      const email = new DialogTextElement('Email', 'email');

      email.setDefaultValue('example@email.com');

      expect(email).toEqual({
        label: 'Email',
        name: 'email',
        type: 'text',
        value: 'example@email.com',
      });
    });
  });

  describe('addPlaceholder', () => {
    it('should add a placeholder', () => {
      const email = new DialogTextElement('Email', 'email');

      email.addPlaceholder('Your email...');

      expect(email).toEqual({
        label: 'Email',
        name: 'email',
        placeholder: 'Your email...',
        type: 'text',
      });
    });
  });

  describe('makeFieldOptional', () => {
    it('should make the field optional', () => {
      const email = new DialogTextElement('Email', 'email');

      email.makeFieldOptional();

      expect(email).toEqual({
        label: 'Email',
        name: 'email',
        optional: true,
        type: 'text',
      });
    });
  });
});
