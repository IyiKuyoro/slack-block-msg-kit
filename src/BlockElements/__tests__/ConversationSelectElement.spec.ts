import ConversationSelectElement from '../ConversationSelectElement';

describe('ConversationSelectElement', () => {
  it('should create a new conversation element', () => {
    const cse = new ConversationSelectElement('ACT001', 'placeholder');

    expect(cse).toEqual({
      action_id: 'ACT001',
      placeholder: {
        text: 'placeholder',
        type: 'plain_text',
      },
      type: 'conversations_select',
    });
  });

  describe('addInitialConversation()', () => {
    it('should add initial conversation', () => {
      const userSelect = new ConversationSelectElement('ACT001', 'placeholder');

      userSelect.addInitialConversation('CD001122');

      expect(userSelect).toEqual({
        action_id: 'ACT001',
        initial_conversation: 'CD001122',
        placeholder: {
          text: 'placeholder',
          type: 'plain_text',
        },
        type: 'conversations_select',
      });
    });
  });
});
