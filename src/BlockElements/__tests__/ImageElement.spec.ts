import ImageElement from '../ImageElement';

describe('ImageElement', () => {
  it('should create an image element', () => {
    const image = new ImageElement('https://fakseimageurl.jpg', 'fake image');

    expect(image).toEqual({
      alt_text: 'fake image',
      image_url: 'https://fakseimageurl.jpg',
      type: 'image',
    });
  });
});
