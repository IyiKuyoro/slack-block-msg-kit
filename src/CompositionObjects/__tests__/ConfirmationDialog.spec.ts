import ConfirmationDialog from '../ConfirmationDialog';
import Text, { TextType } from '../Text';

describe('ConfirmationDialog', () => {
  it('should create a new confirmation dialog', () => {
    const dialogText = new Text(TextType.plainText, 'Hey, are you sure about that?');

    const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

    expect(dialog.title).toEqual({
      text: 'True?',
      type: 'plain_text',
    });
    expect(dialog.text).toEqual({
      text: 'Hey, are you sure about that?',
      type: 'plain_text',
    });
    expect(dialog.confirm).toEqual({
      text: 'Yes',
      type: 'plain_text',
    });
    expect(dialog.deny).toEqual({
      text: 'No',
      type: 'plain_text',
    });
  });

  describe('recogniseTitleEmoji()', () => {
    it('should show emojis in the title', () => {
      const dialogText = new Text(TextType.plainText, 'Hey, are you sure about that?');
      const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

      dialog.recogniseTitleEmoji();

      expect(dialog.title).toEqual({
        emoji: true,
        text: 'True?',
        type: 'plain_text',
      });
    });
  });

  describe('recogniseTextEmoji()', () => {
    it('should show emojis in the text', () => {
      const dialogText = new Text(TextType.plainText, 'Hey, are you sure about that?');
      const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

      dialog.recogniseTextEmoji();

      expect(dialog.text).toEqual({
        emoji: true,
        text: 'Hey, are you sure about that?',
        type: 'plain_text',
      });
    });

    it('should throw an error if type is mrkdwn and emoji is to be added', done => {
      try {
        const dialogText = new Text(TextType.mrkdwn, 'Hey, are you sure about that?');
        const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

        dialog.recogniseTextEmoji();
      } catch (error) {
        expect(error.message).toEqual('You cannot use a emojis with mrkdwn type.');
        done();
      }
    });
  });

  describe('displayTextVerbatim()', () => {
    it('should display text verbatim', () => {
      const dialogText = new Text(TextType.mrkdwn, 'Hey, are you sure about that?');
      const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

      dialog.displayTextVerbatim();

      expect(dialog.text).toEqual({
        text: 'Hey, are you sure about that?',
        type: 'mrkdwn',
        verbatim: true,
      });
    });

    it('should throw an error if type is plain_text and text is to be displayed verbatim', done => {
      try {
        const dialogText = new Text(TextType.plainText, 'Hey, are you sure about that?');
        const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

        dialog.displayTextVerbatim();
      } catch (error) {
        expect(error.message).toEqual('You cannot use verbatim with plain_text type.');
        done();
      }
    });
  });

  describe('recogniseConfirmButtonEmoji()', () => {
    it('should display emojis in the confirm button', () => {
      const dialogText = new Text(TextType.plainText, 'Hey, are you sure about that?');
      const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

      dialog.recogniseConfirmButtonEmoji();

      expect(dialog.confirm).toEqual({
        emoji: true,
        text: 'Yes',
        type: 'plain_text',
      });
    });
  });

  describe('recogniseDenyButtonEmoji()', () => {
    it('should display emojis in the deny button', () => {
      const dialogText = new Text(TextType.plainText, 'Hey, are you sure about that?');
      const dialog = new ConfirmationDialog('True?', dialogText, 'Yes', 'No');

      dialog.recogniseDenyButtonEmoji();

      expect(dialog.deny).toEqual({
        emoji: true,
        text: 'No',
        type: 'plain_text',
      });
    });
  });
});
