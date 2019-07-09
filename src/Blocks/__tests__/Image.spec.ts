import Image from '../Image';

describe('Image', () => {
  it('should create an image block without a block_id', () => {
    const image = new Image('https://fakeimage.jpg', 'fake image');

    expect(image).toEqual({
      alt_text: 'fake image',
      image_url: 'https://fakeimage.jpg',
      type: 'image',
    });
  });

  it('should create an image block with a block_id', () => {
    const image = new Image('https://fakeimage.jpg', 'fake image', 'BLO001');

    expect(image).toEqual({
      alt_text: 'fake image',
      block_id: 'BLO001',
      image_url: 'https://fakeimage.jpg',
      type: 'image',
    });
  });

  describe('addTitle()', () => {
    it('should add a title to the image', () => {
      const image = new Image('https://fakeimage.jpg', 'fake image');

      image.addTitle('Image title');

      expect(image).toEqual({
        alt_text: 'fake image',
        image_url: 'https://fakeimage.jpg',
        title: {
          text: 'Image title',
          type: 'plain_text',
        },
        type: 'image',
      });
    });
  });
});
