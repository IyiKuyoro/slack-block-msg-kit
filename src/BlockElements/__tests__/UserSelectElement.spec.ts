import Text, { TextType } from '../../CompositionObjects/Text';
import UserSelectElement from '../UserSelectElement';

describe('UserSelectElement', () => {
  it('should create a new user select element', () => {
    const userSelect = new UserSelectElement('ACT001', 'placeholder');

    expect(userSelect).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'placeholder',
        type: 'plain_text',
      },
      type: 'users_select',
    });
  });

  describe('addInitialUser()', () => {
    it('should add an initial user', () => {
      const userSelect = new UserSelectElement('ACT001', 'placeholder');

      userSelect.addInitialUser('CD001122');

      expect(userSelect).toEqual({
        action_id: 'ACT001',
        initial_user: 'CD001122',
        placeholder: {
          text: 'placeholder',
          type: 'plain_text',
        },
        type: 'users_select',
      });
    });
  });

  describe('addConfirmationDialogByParameters()', () => {
    it('should add a confirmation dialog', () => {
      const userSelect = new UserSelectElement('ACT001', 'placeholder');

      userSelect.addConfirmationDialogByParameters('Confirm', new Text(TextType.plainText, 'dialog text'), 'Yes', 'No');

      expect(userSelect.confirm).toEqual({
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
