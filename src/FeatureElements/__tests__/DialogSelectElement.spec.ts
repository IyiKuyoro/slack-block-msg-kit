import DialogSelectElement, { DialogSelectDataSource } from '../DialogSelectElement';
import DialogSelectOption from '../DialogSelectOption';
import Option from '../../CompositionObjects/Option';
import DialogSelectOptionGroup from '../DialogSelectOptionGroup';

describe('DialogSelectElement', () => {
  it('should create a new select element', () => {
    const selectMenu = new DialogSelectElement('Select an option', 'name');

    expect(selectMenu).toEqual({
      label: 'Select an option',
      name: 'name',
      type: 'select',
    });
  });

  describe('changeDataSource', () => {
    it('should change data source to external', () => {
      const selectMenu = new DialogSelectElement('Select an option', 'name');

      selectMenu.changeDataSource(DialogSelectDataSource.external);

      expect(selectMenu).toEqual({
        data_source: 'external',
        label: 'Select an option',
        name: 'name',
        type: 'select',
      });
    });
  });

  describe('addMinQueryLength', () => {
    it('should change data source to external', () => {
      const selectMenu = new DialogSelectElement('Select an option', 'name');

      selectMenu.changeDataSource(DialogSelectDataSource.external).addMinQueryLength(3);

      expect(selectMenu).toEqual({
        data_source: 'external',
        label: 'Select an option',
        min_query_length: 3,
        name: 'name',
        type: 'select',
      });
    });

    it('should throw an error if the data source has not been set to external', done => {
      try {
        const selectMenu = new DialogSelectElement('Select an option', 'name');

        selectMenu.addMinQueryLength(3);

        expect(selectMenu).toEqual({
          data_source: 'external',
          label: 'Select an option',
          min_query_length: 3,
          name: 'name',
          type: 'select',
        });
      } catch (error) {
        expect(error.message).toEqual('Only external data sources require a min query length');
        done();
      }
    });
  });

  describe('addSelectedOption', () => {
    it('should add a default select option', () => {
      const selectMenu = new DialogSelectElement('Select an option', 'name');

      selectMenu.addSelectedOption(new DialogSelectOption('label', 'value'));

      expect(selectMenu).toEqual({
        label: 'Select an option',
        name: 'name',
        selected_options: {
          label: 'label',
          value: 'value',
        },
        type: 'select',
      });
    });
  });

  describe('addOptions', () => {
    it('should add an array of options to the menu', () => {
      const selectMenu = new DialogSelectElement('Select an option', 'name');

      selectMenu.addOptions([
        new DialogSelectOption('option 1', 'value 1'),
        new DialogSelectOption('option 2', 'value 2'),
      ]);

      expect(selectMenu).toEqual({
        label: 'Select an option',
        name: 'name',
        options: [
          {
            label: 'option 1',
            value: 'value 1',
          },
          {
            label: 'option 2',
            value: 'value 2',
          },
        ],
        type: 'select',
      });
    });

    it('should add more options to the menu', () => {
      const selectMenu = new DialogSelectElement('Select an option', 'name');

      selectMenu
        .addOptions([new DialogSelectOption('option 1', 'value 1'), new DialogSelectOption('option 2', 'value 2')])
        .addOptions([new DialogSelectOption('option 3', 'value 3')]);

      expect(selectMenu).toEqual({
        label: 'Select an option',
        name: 'name',
        options: [
          {
            label: 'option 1',
            value: 'value 1',
          },
          {
            label: 'option 2',
            value: 'value 2',
          },
          {
            label: 'option 3',
            value: 'value 3',
          },
        ],
        type: 'select',
      });
    });

    it('should throw an error if option_group is already added', done => {
      try {
        const selectMenu = new DialogSelectElement('Select an option', 'name');

        selectMenu
          .addOptionsGroup([new DialogSelectOptionGroup('label', [new DialogSelectOption('option 1', 'value 1')])])
          .addOptions([new DialogSelectOption('option 1', 'value 1'), new DialogSelectOption('option 2', 'value 2')]);
      } catch (error) {
        expect(error.message).toEqual('Cannot have options and option_groups in the same select menu');
        done();
      }
    });
  });

  describe('addOptionsGroup', () => {
    it('should add options group to the menu', () => {
      const selectMenu = new DialogSelectElement('label', 'name');

      selectMenu.addOptionsGroup([
        new DialogSelectOptionGroup('label', [new DialogSelectOption('option 1', 'value 1')]),
      ]);

      expect(selectMenu).toEqual({
        label: 'label',
        name: 'name',
        option_groups: [
          {
            label: 'label',
            options: [
              {
                label: 'option 1',
                value: 'value 1',
              },
            ],
          },
        ],
        type: 'select',
      });
    });

    it('should add more options group to the menu', () => {
      const selectMenu = new DialogSelectElement('label', 'name');

      selectMenu
        .addOptionsGroup([new DialogSelectOptionGroup('label', [new DialogSelectOption('option 1', 'value 1')])])
        .addOptionsGroup([new DialogSelectOptionGroup('label', [new DialogSelectOption('option 2', 'value 2')])]);

      expect(selectMenu).toEqual({
        label: 'label',
        name: 'name',
        option_groups: [
          {
            label: 'label',
            options: [
              {
                label: 'option 1',
                value: 'value 1',
              },
            ],
          },
          {
            label: 'label',
            options: [
              {
                label: 'option 2',
                value: 'value 2',
              },
            ],
          },
        ],
        type: 'select',
      });
    });

    it('should throw an error if options have already been assigned', done => {
      try {
        const selectMenu = new DialogSelectElement('label', 'name');

        selectMenu
          .addOptions([new DialogSelectOption('option 3', 'value 3')])
          .addOptionsGroup([new DialogSelectOptionGroup('label', [new DialogSelectOption('option 1', 'value 1')])]);
      } catch (error) {
        expect(error.message).toEqual('Cannot have options and option_groups in the same select menu');
        done();
      }
    });
  });
});
