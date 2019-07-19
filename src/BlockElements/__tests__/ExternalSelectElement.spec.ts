import ExternalSelectElement from '../ExternalSelectElement';
import Option from '../../CompositionObjects/Option';

describe('ExternalSelectElement', () => {
  it('should create a new external select element', () => {
    const externalSelectElement = new ExternalSelectElement('ACT001', 'placeholder');
    expect(externalSelectElement).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'placeholder',
        type: 'plain_text',
      },
      type: 'external_select',
    });
  });

  it('should test addMinQueryLength function', () => {
    const externalSelectElement = new ExternalSelectElement('ACT001', 'placeholder');
    externalSelectElement.addMinQueryLength(3);
    expect(externalSelectElement).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'placeholder',
        type: 'plain_text',
      },
      type: 'external_select',
      min_query_length: 3,
    });
    expect(() => externalSelectElement.addMinQueryLength(0)).toThrowError('minQueryLength should be greater than 0.');
  });

  it('should test addInitialOption function', () => {
    const externalSelectElement = new ExternalSelectElement('ACT001', 'placeholder');
    externalSelectElement.addInitialOption(new Option('Option 1', 'Value 1'));
    expect(externalSelectElement).toEqual({
      action_id: 'ACT001',
      placeholder: {
        type: 'plain_text',
        text: 'placeholder',
      },
      type: 'external_select',
      initial_option: {
        text: { type: 'plain_text', text: 'Option 1' },
        value: 'Value 1',
      },
    });
  });
});
