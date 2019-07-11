import Option from '../Option';

describe('Option', () => {
  it('should create an option object', () => {
    const opt = new Option('Option 1', '1');

    expect(opt).toEqual({
      text: {
        text: 'Option 1',
        type: 'plain_text',
      },
      value: '1',
    });
  });

  describe('addUrl()', () => {
    it('should add a url to the option', () => {
      const opt = new Option('Option 1', '1');

      opt.addUrl('https://fakeurl.com');

      expect(opt).toEqual({
        text: {
          text: 'Option 1',
          type: 'plain_text',
        },
        url: 'https://fakeurl.com',
        value: '1',
      });
    });
  });
});
