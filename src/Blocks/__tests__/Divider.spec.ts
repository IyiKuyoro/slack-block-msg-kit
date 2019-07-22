import Divider from '../Divider';

describe('Divider', () => {
  it('should create a divider object with a block id', () => {
    const divider = new Divider('BLK001');

    expect(divider).toEqual({
      block_id: 'BLK001',
      type: 'divider',
    });
  });

  it('should create a divider without a block id', () => {
    const divider = new Divider();

    expect(divider).toEqual({
      type: 'divider',
    });
  });
});
