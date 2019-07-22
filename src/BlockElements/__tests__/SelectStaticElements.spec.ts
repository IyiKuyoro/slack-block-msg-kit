import Option from '../../CompositionObjects/Option';
import OptionGroup from '../../CompositionObjects/OptionGroup';
import Text, { TextType } from '../../CompositionObjects/Text';
import StaticSelectElement from '../StaticSelectElement';

describe('StaticSelectElement', () => {
  it('should create a static select element', () => {
    const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

    expect(staticSelect).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'Select placeholder',
        type: 'plain_text',
      },
      type: 'static_select',
    });
  });

  describe('addOptions', () => {
    it('should throw an error if option_group has already been assigned', done => {
      try {
        const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');
        const optGroup = new OptionGroup('Group', [new Option('Option 1', 'one')]);
        staticSelect.addOptionGroups([optGroup]);

        staticSelect.addOptions([new Option('Option 2', 'two')]);
      } catch (error) {
        expect(error.message).toEqual('StaticSelectElement cannot have both options and option_groups');
        done();
      }
    });

    it('should add options without the initial option', () => {
      const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

      staticSelect.addOptions([new Option('Option 1', 'one')]);

      expect(staticSelect.options).toEqual([
        {
          text: {
            text: 'Option 1',
            type: 'plain_text',
          },
          value: 'one',
        },
      ]);
    });

    it('should add options with the initial option', () => {
      const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

      staticSelect.addOptions([new Option('Option 1', 'one')], 0);

      expect(staticSelect.initial_option).toEqual({
        text: {
          text: 'Option 1',
          type: 'plain_text',
        },
        value: 'one',
      });
    });

    it('should throw an error if initial option index is out of array bound', done => {
      try {
        const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

        staticSelect.addOptions([new Option('Option 1', 'one')], 1);
      } catch (error) {
        expect(error.message).toEqual('initialOptionIndex must be a positive integer less than the options length');

        done();
      }
    });

    it('should throw an error if initial option index is less than zero', done => {
      try {
        const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

        staticSelect.addOptions([new Option('Option 1', 'one')], -1);
      } catch (error) {
        expect(error.message).toEqual('initialOptionIndex must be a positive integer less than the options length');

        done();
      }
    });
  });

  describe('addOptionGroups', () => {
    it('should throw error if options has already been assigned', done => {
      try {
        const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');
        staticSelect.addOptions([new Option('Option 2', 'two')]);

        const optGroup = new OptionGroup('Group', [new Option('Option 1', 'one')]);

        staticSelect.addOptionGroups([optGroup]);
      } catch (error) {
        expect(error.message).toEqual('StaticSelectElement cannot have both options and option_groups');
        done();
      }
    });

    it('should add option group without the initial option', () => {
      const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

      const optGroup = new OptionGroup('Group', [new Option('Option 1', 'one')]);

      staticSelect.addOptionGroups([optGroup]);

      expect(staticSelect.option_groups).toEqual([
        {
          label: {
            text: 'Group',
            type: 'plain_text',
          },
          options: [
            {
              text: {
                text: 'Option 1',
                type: 'plain_text',
              },
              value: 'one',
            },
          ],
        },
      ]);
    });

    it('should add option group with the initial option', () => {
      const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

      const optGroup = new OptionGroup('Group', [new Option('Option 1', 'one')]);

      staticSelect.addOptionGroups([optGroup], 0, 0);

      expect(staticSelect.initial_option).toEqual({
        text: {
          text: 'Option 1',
          type: 'plain_text',
        },
        value: 'one',
      });
    });

    it('should throw an error if a wrong initialOptionGroupIndex are passed', done => {
      try {
        const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

        const optGroup = new OptionGroup('Group', [new Option('Option 1', 'one')]);

        staticSelect.addOptionGroups([optGroup], 1, 0);
      } catch (error) {
        expect(error.message).toEqual('initialOptionGroupIndex is out of optionGroup range');
        done();
      }
    });

    it('should throw an error if a wrong initialOptionIndex are passed', done => {
      try {
        const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');

        const optGroup = new OptionGroup('Group', [new Option('Option 1', 'one')]);

        staticSelect.addOptionGroups([optGroup], 0, 1);
      } catch (error) {
        expect(error.message).toEqual('initialOptionIndex is out of options range');
        done();
      }
    });
  });

  describe('addConfirmationDialogByParameters', () => {
    it('should add confirmation dialog', () => {
      const staticSelect = new StaticSelectElement('ACT001', 'Select placeholder');
      staticSelect.addOptions([new Option('Option 1', 'one')]);

      staticSelect.addConfirmationDialogByParameters(
        'Confirm',
        new Text(TextType.plainText, 'dialog text'),
        'Yes',
        'No',
      );

      expect(staticSelect.confirm).toEqual({
        confirm: {
          text: 'Yes',
          type: 'plain_text',
        },
        deny: {
          text: 'No',
          type: 'plain_text',
        },
        text: {
          text: 'dialog text',
          type: 'plain_text',
        },
        title: {
          text: 'Confirm',
          type: 'plain_text',
        },
      });
    });
  });
});
