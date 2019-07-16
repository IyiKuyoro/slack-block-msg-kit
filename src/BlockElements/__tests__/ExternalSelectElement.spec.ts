import ExternalSelectElement from '../ExternalSelectElement';

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
    })
  })

  it('should test addMinQueryLength function', () => {
    const externalSelectElement = new ExternalSelectElement('ACT001', 'placeholder');
    externalSelectElement.addMinQueryLength(3)
    expect(externalSelectElement).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'placeholder',
        type: 'plain_text',
      },
      type: 'external_select',
      min_query_length: 3
    })
    expect(() => externalSelectElement.addMinQueryLength(0)).toThrowError('minQueryLength should be greater than 0.')
  })

  it('should add addInitialOption', () => {
    const externalSelectElement = new ExternalSelectElement('ACT001', 'placeholder');
    externalSelectElement.addInitialOption({
      text: { type: 'plain_text', text: 'text' },
      value: 'value'
    })
    expect(externalSelectElement).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'placeholder',
        type: 'plain_text',
      },
      type: 'external_select',
      initial_option: {
        text: { type: 'mrkdwn', text: 'text' },
        value: 'value'
      }
    })
  })
})