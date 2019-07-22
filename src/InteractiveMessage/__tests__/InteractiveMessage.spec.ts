import InteractiveMessage from '..';
import Section from '../../../Blocks/Section';
import Text, { TextType } from '../../../CompositionObjects/Text';

describe('InteractiveMessage', () => {
  it('should create an interactive message', () => {
    const msg = new InteractiveMessage('Fallback text');

    expect(msg).toEqual({
      mrkdwn: true,
      text: 'Fallback text',
    });
  });

  it('should create an interactive message with an array of blocks', () => {
    const msg = new InteractiveMessage('Fallback text', false, [
      new Section(new Text(TextType.plainText, 'New Text'), 'BLK001'),
    ]);

    expect(msg).toEqual({
      blocks: [
        {
          block_id: 'BLK001',
          text: {
            text: 'New Text',
            type: 'plain_text',
          },
          type: 'section',
        },
      ],
      mrkdwn: false,
      text: 'Fallback text',
    });
  });

  describe('addBlock', () => {
    it('should add a block to the message', () => {
      const msg = new InteractiveMessage('Fallback text', true, []);

      msg.addBlock(new Section(new Text(TextType.plainText, 'New Text'), 'BLK001'));

      expect(msg).toEqual({
        blocks: [
          {
            block_id: 'BLK001',
            text: {
              text: 'New Text',
              type: 'plain_text',
            },
            type: 'section',
          },
        ],
        mrkdwn: true,
        text: 'Fallback text',
      });
    });

    it('should add a block to the message', () => {
      const msg = new InteractiveMessage('Fallback text');

      msg.addBlock(new Section(new Text(TextType.plainText, 'New Text'), 'BLK001'));

      expect(msg).toEqual({
        blocks: [
          {
            block_id: 'BLK001',
            text: {
              text: 'New Text',
              type: 'plain_text',
            },
            type: 'section',
          },
        ],
        mrkdwn: true,
        text: 'Fallback text',
      });
    });
  });

  describe('addAddThreadTimeStamp', () => {
    it('should', () => {
      const msg = new InteractiveMessage('Fallback text');

      msg.addAddThreadTimeStamp('1234345234');

      expect(msg).toEqual({
        mrkdwn: true,
        text: 'Fallback text',
        thread_ts: '1234345234',
      });
    });
  });
});
