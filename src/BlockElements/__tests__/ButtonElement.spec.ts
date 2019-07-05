import ConfirmationDialog from '../../CompositionObjects/ConfirmationDialog';
import Text, { TextType } from '../../CompositionObjects/Text';
import ButtonElement, { ButtonStyle } from '../ButtonElement';

describe('ButtonElement', () => {
  it('should create a new button element without value', () => {
    const btn = new ButtonElement('Button Text', 'AC001');

    expect(btn).toEqual({
      action_id: 'AC001',
      text: {
        text: 'Button Text',
        type: 'plain_text',
      },
      type: 'button',
    });
  });

  it('should create a new button element with value', () => {
    const btn = new ButtonElement('Button Text', 'AC001', 'execute');

    expect(btn).toEqual({
      action_id: 'AC001',
      text: {
        text: 'Button Text',
        type: 'plain_text',
      },
      type: 'button',
      value: 'execute',
    });
  });

  describe('addUrl()', () => {
    it('should add a url to the button', () => {
      const btn = new ButtonElement('Button Text', 'AC001', 'execute');

      btn.addUrl('https://fakeurl.com');

      expect(btn).toEqual({
        action_id: 'AC001',
        text: {
          text: 'Button Text',
          type: 'plain_text',
        },
        type: 'button',
        url: 'https://fakeurl.com',
        value: 'execute',
      });
    });
  });

  describe('addValue()', () => {
    it('should add a value to the button', () => {
      const btn = new ButtonElement('Button Text', 'AC001');

      btn.addValue('button value');

      expect(btn).toEqual({
        action_id: 'AC001',
        text: {
          text: 'Button Text',
          type: 'plain_text',
        },
        type: 'button',
        value: 'button value',
      });
    });
  });

  describe('changeStyle()', () => {
    it('should change the style of the button', () => {
      const btn = new ButtonElement('Button Text', 'AC001');

      btn.changeStyle(ButtonStyle.primary);

      expect(btn).toEqual({
        action_id: 'AC001',
        style: 'primary',
        text: {
          text: 'Button Text',
          type: 'plain_text',
        },
        type: 'button',
      });
    });
  });

  describe('addConfirmationDialogByParameters()', () => {
    it('should add confirmation dialogue by parameters', () => {
      const btn = new ButtonElement('Button Text', 'AC001');

      btn.addConfirmationDialogByParameters(
        'Dismiss?',
        new Text(TextType.plainText, 'Are you sure you wish to dismiss?'),
        'Yes',
        'No',
      );

      expect(btn).toEqual({
        action_id: 'AC001',
        confirm: {
          confirm: {
            text: 'Yes',
            type: 'plain_text',
          },
          deny: {
            text: 'No',
            type: 'plain_text',
          },
          text: {
            text: 'Are you sure you wish to dismiss?',
            type: 'plain_text',
          },
          title: {
            text: 'Dismiss?',
            type: 'plain_text',
          },
        },
        text: {
          text: 'Button Text',
          type: 'plain_text',
        },
        type: 'button',
      });
    });
  });

  describe('addConfirmationDialog()', () => {
    it('should add confirmation dialogue', () => {
      const btn = new ButtonElement('Button Text', 'AC001');

      const dialog = new ConfirmationDialog(
        'Dismiss?',
        new Text(TextType.plainText, 'Are you sure you wish to dismiss?'),
        'Yes',
        'No',
      );

      dialog.recogniseConfirmButtonEmoji().recogniseDenyButtonEmoji();

      btn.addConfirmationDialog(dialog);

      expect(btn).toEqual({
        action_id: 'AC001',
        confirm: {
          confirm: {
            emoji: true,
            text: 'Yes',
            type: 'plain_text',
          },
          deny: {
            emoji: true,
            text: 'No',
            type: 'plain_text',
          },
          text: {
            text: 'Are you sure you wish to dismiss?',
            type: 'plain_text',
          },
          title: {
            text: 'Dismiss?',
            type: 'plain_text',
          },
        },
        text: {
          text: 'Button Text',
          type: 'plain_text',
        },
        type: 'button',
      });
    });
  });
});
