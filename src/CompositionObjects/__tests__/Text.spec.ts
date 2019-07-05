import Text, { TextType } from '../Text';

describe('Text', () => {
  it('should create a new text object', () => {
    const text = new Text(TextType.plainText, 'Some plain text');

    expect(text).toEqual({
      text: 'Some plain text',
      type: 'plain_text',
    });
  });

  it('should create a new text with emoji', () => {
    const text = new Text(TextType.plainText, 'Some emoji text', true);

    expect(text).toEqual({
      emoji: true,
      text: 'Some emoji text',
      type: 'plain_text',
    });
  });

  it('should create a new text with verbatim', () => {
    const text = new Text(TextType.mrkdwn, 'Some verbatim text', undefined, true);

    expect(text).toEqual({
      text: 'Some verbatim text',
      type: 'mrkdwn',
      verbatim: true,
    });
  });

  it('should throw an error if emoji is paired with mrkdwn', done => {
    try {
      const text = new Text(TextType.mrkdwn, 'Some emoji text', true);
    } catch (error) {
      expect(error.message).toEqual('You cannot use a emojis with mrkdwn type.');
      done();
    }
  });

  it('should throw an error if verbatim is paired with plain_text', done => {
    try {
      const text = new Text(TextType.plainText, 'Some verbatim text', undefined, true);
    } catch (error) {
      expect(error.message).toEqual('You cannot use verbatim with plain_text type.');
      done();
    }
  });
});
