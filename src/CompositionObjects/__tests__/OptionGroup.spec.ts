import Option from '../Option';
import OptionGroup from '../OptionGroup';

describe('OptionGroup', () => {
  it('should throw an error if more than 100 options are passed', done => {
    try {
      const options = [];

      for (let i = 0; i < 101; i++) {
        options.push(new Option(`Option ${i}`, `${i}`));
      }

      const og = new OptionGroup('options', options);
    } catch (error) {
      expect(error.message).toEqual('Cannot hae more than 100 options in a group');
      done();
    }
  });

  it('should throw an error if more than one option has the same value', done => {
    try {
      const options = new OptionGroup('options', [new Option('Option', 'option'), new Option('Option', 'option')]);
    } catch (error) {
      expect(error.message).toEqual("Two options cannot share the same value in one group: 'option'");
      done();
    }
  });

  it('should create a group', () => {
    const options = new OptionGroup('options', [new Option('Option', 'option')]);

    expect(options).toEqual({
      label: {
        text: 'options',
        type: 'plain_text',
      },
      options: [
        {
          text: {
            text: 'Option',
            type: 'plain_text',
          },
          value: 'option',
        },
      ],
    });
  });
});
