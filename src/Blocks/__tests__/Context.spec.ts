import ImageElement from '../../BlockElements/ImageElement';
import Text, { TextType } from '../../CompositionObjects/Text';
import Context from '../Context';

describe('Context', () => {
  it('should create a context object without a block_id', () => {
    const cnt = new Context([new Text(TextType.plainText, 'some text')]);

    expect(cnt).toEqual({
      elements: [
        {
          text: 'some text',
          type: 'plain_text',
        },
      ],
      type: 'context',
    });
  });

  it('should create a context object with a block_id', () => {
    const cnt = new Context([new Text(TextType.plainText, 'some text')], 'BLK001');

    expect(cnt).toEqual({
      block_id: 'BLK001',
      elements: [
        {
          text: 'some text',
          type: 'plain_text',
        },
      ],
      type: 'context',
    });
  });

  it('should throw an error if more than 10 elements are passed', done => {
    try {
      const cnt = new Context([
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
        new Text(TextType.plainText, 'some text'),
      ]);
    } catch (error) {
      expect(error.message).toEqual('Context elements cannot be more than 10.');
      done();
    }
  });

  describe('addElements()', () => {
    it('should add some elements', () => {
      const cnt = new Context([
        new Text(TextType.plainText, 'some text 1'),
        new Text(TextType.plainText, 'some text 2'),
        new ImageElement('https://fakeimage.jpg', 'fake image'),
      ]);

      cnt.addElements([new Text(TextType.plainText, 'some text 3')]);

      expect(cnt.elements).toEqual([
        {
          text: 'some text 1',
          type: 'plain_text',
        },
        {
          text: 'some text 2',
          type: 'plain_text',
        },
        {
          alt_text: 'fake image',
          image_url: 'https://fakeimage.jpg',
          type: 'image',
        },
        {
          text: 'some text 3',
          type: 'plain_text',
        },
      ]);
    });

    it('should throw an error if more than 10 elements are passed', done => {
      try {
        const cnt = new Context([
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
          new Text(TextType.plainText, 'some text'),
        ]);

        cnt.addElements([new Text(TextType.plainText, 'some text')]);
      } catch (error) {
        expect(error.message).toEqual('Context elements cannot be more than 10.');
        done();
      }
    });
  });
});
