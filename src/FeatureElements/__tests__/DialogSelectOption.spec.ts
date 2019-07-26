import DialogSelectOption from '../DialogSelectOption';

describe('DialogSelectOption', () => {
  it('should create a new option object', () => {
    const opt = new DialogSelectOption('option 1', 'one');

    expect(opt).toEqual({
      label: 'option 1',
      value: 'one',
    });
  });
});
