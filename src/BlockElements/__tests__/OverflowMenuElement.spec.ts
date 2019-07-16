import Option from '../../CompositionObjects/Option';
import Text, { TextType } from '../../CompositionObjects/Text';
import OverflowMenuElement from '../OverflowMenuElement';

describe('OverflowMenuElement', () => {
  it('should create a new overflow menu', () => {
    const overflow = new OverflowMenuElement('ACT001', [
      new Option('Option 1', 'value 1'),
      new Option('Option 2', 'value 2'),
    ]);

    expect(overflow).toEqual({
      action_id: 'ACT001',
      options: [
        {
          text: {
            text: 'Option 1',
            type: 'plain_text',
          },
          value: 'value 1',
        },
        {
          text: {
            text: 'Option 2',
            type: 'plain_text',
          },
          value: 'value 2',
        },
      ],
      type: 'overflow',
    });
  });

  it('should throw an error if options are less than two', done => {
    try {
      const overflow = new OverflowMenuElement('ACT001', [new Option('Option 1', 'value 1')]);
    } catch (error) {
      expect(error.message).toEqual('Minimum of two options allowed');
      done();
    }
  });

  it('should throw an error if options are less than two', done => {
    try {
      const overflow = new OverflowMenuElement('ACT001', [
        new Option('Option 1', 'value 1'),
        new Option('Option 2', 'value 2'),
        new Option('Option 3', 'value 3'),
        new Option('Option 4', 'value 4'),
        new Option('Option 5', 'value 5'),
        new Option('Option 6', 'value 6'),
      ]);
    } catch (error) {
      expect(error.message).toEqual('Maximum of five options allowed');
      done();
    }
  });

  it('should throw an error if two options have the same value', done => {
    try {
      const overflow = new OverflowMenuElement('ACT001', [
        new Option('Option 1', 'value 1'),
        new Option('Option 2', 'value 2'),
        new Option('Option 3', 'value 2'),
      ]);
    } catch (error) {
      expect(error.message).toEqual("Two options cannot share the same value in one group: 'value 2'");
      done();
    }
  });

  describe('addConfirmationDialogByParameters()', () => {
    it('should add a confirmation dialog to the menu', () => {
      const overflow = new OverflowMenuElement('ACT001', [
        new Option('Option 1', 'value 1'),
        new Option('Option 2', 'value 2'),
      ]);

      overflow.addConfirmationDialogByParameters('Confirm', new Text(TextType.plainText, 'dialog text'), 'Yes', 'No');

      expect(overflow.confirm).toEqual({
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
