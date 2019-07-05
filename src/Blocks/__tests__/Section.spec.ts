import ButtonElement from '../../BlockElements/ButtonElement';
import Text, { TextType } from '../../CompositionObjects/Text';
import Section from '../Section';

describe('Section', () => {
  it('should create a new section without block id', () => {
    const section = new Section(
      new Text(TextType.plainText, 'The section text')
    );

    expect(section).toEqual({
      text: {
        text: 'The section text',
        type: 'plain_text',
      },
      type: 'section',
    });
  });

  it('should create a new section with block id', () => {
    const section = new Section(
      new Text(TextType.plainText, 'The section text'),
      'BL001'
    );

    expect(section).toEqual({
      block_id: 'BL001',
      text: {
        text: 'The section text',
        type: 'plain_text',
      },
      type: 'section',
    });
  });

  describe('addField()', () => {
    it('should add a filed to the section', () => {
      const section = new Section(
        new Text(TextType.plainText, 'The section text')
      );

      section.addField(
        new Text(TextType.mrkdwn, 'Some field text')
      );

      expect(section).toEqual({
        fields: [{
          text: 'Some field text',
          type: 'mrkdwn',
        }],
        text: {
          text: 'The section text',
          type: 'plain_text',
        },
        type: 'section',
      })
    });

    it('should throw an error if then fields have been added', (done) => {
      try {
        const section = new Section(
          new Text(TextType.plainText, 'The section text')
        );

        for (let i = 1; i <= 11; i++) {
          section.addField(
            new Text(TextType.mrkdwn, `field ${i}`)
          );
        }
      } catch (error) {
        expect(error.message).toEqual('You cannot have more than 10 Text objects in section fields.');
        done();
      }
    });
  });

  describe('addAccessory()', () => {
    it('should add a button to the section', () => {
      const section = new Section(
        new Text(TextType.plainText, 'The section text')
      );
      const btn = new ButtonElement('Button', 'actionId');

      section.addAccessory(btn);

      expect(section).toEqual({
        accessory: {
          action_id: 'actionId',
          text: {
            text: 'Button',
            type: 'plain_text',
          },
          type: 'button',
        },
        text: {
          text: 'The section text',
          type: 'plain_text',
        },
        type: 'section',
      });
    });
  });
});
