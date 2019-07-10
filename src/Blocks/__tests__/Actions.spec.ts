import ButtonElement from '../../BlockElements/ButtonElement';
import Actions from '../Actions';
import ImageElement from '../../BlockElements/ImageElement';

describe('Actions', () => {
  it('should throw an error if elements are more than 5', done => {
    try {
      const actions = new Actions([
        new ButtonElement('button', 'ACT001'),
        new ButtonElement('button', 'ACT002'),
        new ButtonElement('button', 'ACT003'),
        new ButtonElement('button', 'ACT004'),
        new ButtonElement('button', 'ACT005'),
        new ButtonElement('button', 'ACT006'),
      ]);
    } catch (error) {
      expect(error.message).toEqual('Actions element cannot be more than 5.');
      done();
    }
  });

  it("should throw an error if an element's action_id is repeated", done => {
    try {
      const actions = new Actions([
        new ButtonElement('button', 'ACT001'),
        new ButtonElement('button', 'ACT002'),
        new ButtonElement('button', 'ACT002'),
        new ButtonElement('button', 'ACT004'),
        new ButtonElement('button', 'ACT005'),
      ]);
    } catch (error) {
      expect(error.message).toEqual("Action Id 'ACT002' has a conflict in the list of elements");
      done();
    }
  });

  it('should throw an error if an ImageElement is passed as one of the elements', done => {
    try {
      const actions = new Actions([
        new ButtonElement('button', 'ACT001'),
        new ButtonElement('button', 'ACT002'),
        new ImageElement('https://fakeimage.jpg', 'fake image'),
        new ButtonElement('button', 'ACT004'),
        new ButtonElement('button', 'ACT005'),
      ]);
    } catch (error) {
      expect(error.message).toEqual('Image elements cannot be used in actions block');
      done();
    }
  });

  it('should create a action block without a block ID', () => {
    const actions = new Actions([new ButtonElement('button', 'ACT001')]);

    expect(actions).toEqual({
      elements: [
        {
          action_id: 'ACT001',
          text: {
            text: 'button',
            type: 'plain_text',
          },
          type: 'button',
        },
      ],
      type: 'actions',
    });
  });

  it('should create an action block with a block id', () => {
    const actions = new Actions([new ButtonElement('button', 'ACT001')], 'BLK001');

    expect(actions).toEqual({
      block_id: 'BLK001',
      elements: [
        {
          action_id: 'ACT001',
          text: {
            text: 'button',
            type: 'plain_text',
          },
          type: 'button',
        },
      ],
      type: 'actions',
    });
  });

  describe('addElements()', () => {
    it('should add elements to the action block', () => {
      const actions = new Actions([new ButtonElement('button', 'ACT001')], 'BLK001');

      actions.addElements([new ButtonElement('button', 'ACT002')]);

      expect(actions).toEqual({
        block_id: 'BLK001',
        elements: [
          {
            action_id: 'ACT001',
            text: {
              text: 'button',
              type: 'plain_text',
            },
            type: 'button',
          },
          {
            action_id: 'ACT002',
            text: {
              text: 'button',
              type: 'plain_text',
            },
            type: 'button',
          },
        ],
        type: 'actions',
      });
    });

    it('should throw an error if the elements will add up to more than 5', () => {
      try {
        const actions = new Actions([
          new ButtonElement('button', 'ACT001'),
          new ButtonElement('button', 'ACT002'),
          new ButtonElement('button', 'ACT003'),
          new ButtonElement('button', 'ACT004'),
        ]);

        actions.addElements([new ButtonElement('button', 'ACT005'), new ButtonElement('button', 'ACT006')]);
      } catch (error) {
        expect(error.message).toEqual('Actions element cannot be more than 5.');
      }
    });
  });
});
