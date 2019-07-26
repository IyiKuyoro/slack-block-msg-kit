import Dialog from '../Dialog';
import DialogTextElement from '../DialogTextElement';

describe('Dialog', () => {
  it('should create a new dialog', () => {
    const dialog = new Dialog('Dialog Title', 'callback', [new DialogTextElement('label', 'name')]);

    expect(dialog).toEqual({
      callback_id: 'callback',
      elements: [
        {
          label: 'label',
          name: 'name',
          type: 'text',
        },
      ],
      title: 'Dialog Title',
    });
  });

  it('should throw an error if no elements are assigned', done => {
    try {
      const dialog = new Dialog('Dialog Title', 'callback', []);
    } catch (error) {
      expect(error.message).toEqual('You need to add at least one element to the dialog');
      done();
    }
  });

  describe('addState', () => {
    it('should add a state to the dialog', () => {
      const dialog = new Dialog('Dialog Title', 'callback', [new DialogTextElement('label', 'name')]);

      dialog.addState('dialog state');

      expect(dialog).toEqual({
        callback_id: 'callback',
        elements: [
          {
            label: 'label',
            name: 'name',
            type: 'text',
          },
        ],
        state: 'dialog state',
        title: 'Dialog Title',
      });
    });
  });

  describe('changeSubmitLabel', () => {
    it('should add a submit label', () => {
      const dialog = new Dialog('Dialog Title', 'callback', [new DialogTextElement('label', 'name')]);

      dialog.changeSubmitLabel('Read');

      expect(dialog).toEqual({
        callback_id: 'callback',
        elements: [
          {
            label: 'label',
            name: 'name',
            type: 'text',
          },
        ],
        submit_label: 'Read',
        title: 'Dialog Title',
      });
    });
  });

  describe('notifyOnCancel', () => {
    it('should add a submit label', () => {
      const dialog = new Dialog('Dialog Title', 'callback', [new DialogTextElement('label', 'name')]);

      dialog.notifyOnCancel();

      expect(dialog).toEqual({
        callback_id: 'callback',
        elements: [
          {
            label: 'label',
            name: 'name',
            type: 'text',
          },
        ],
        notify_on_cancel: true,
        title: 'Dialog Title',
      });
    });
  });
});
