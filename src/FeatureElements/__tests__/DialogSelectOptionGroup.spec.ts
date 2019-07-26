import DialogSelectOption from '../DialogSelectOption';
import DialogSelectOptionGroup from '../DialogSelectOptionGroup';

describe('DialogSelectOptionGroup', () => {
  it('should create a new dialog option group', () => {
    const optGroup = new DialogSelectOptionGroup('label', [new DialogSelectOption('option label', 'option value')]);

    expect(optGroup).toEqual({
      label: 'label',
      options: [
        {
          label: 'option label',
          value: 'option value',
        },
      ],
    });
  });
});
