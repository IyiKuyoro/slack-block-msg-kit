import ChannelSelectElement from '../ChannelSelectElement';

describe('ChannelSelectElement', () => {
  it('should create a new channel select element', () => {
    const channelSelect = new ChannelSelectElement('ACT001', 'placeholder');

    expect(channelSelect).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'placeholder',
        type: 'plain_text',
      },
      type: 'channels_select',
    });
  });

  describe('addInitialChannel()', () => {
    it('should add an initial channel to the selection', () => {
      const channelSelect = new ChannelSelectElement('ACT001', 'placeholder');

      channelSelect.addInitialChannel('CT001222');

      expect(channelSelect).toEqual({
        action_id: 'ACT001',
        initial_channel: 'CT001222',
        placeholder: {
          text: 'placeholder',
          type: 'plain_text',
        },
        type: 'channels_select',
      });
    });
  });
});
