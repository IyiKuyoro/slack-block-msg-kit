import { Helpers } from '../index';

describe('Helpers', () => {
  describe('validateString()', () => {
    it('should throw an error if string exceeds length', done => {
      try {
        Helpers.validateString('123456', 'parameter', 5);
      } catch (error) {
        expect(error.message).toEqual('parameter should not be more than 5 characters.');
        done();
      }
    });
  });
});
