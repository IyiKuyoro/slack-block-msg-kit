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

  describe('validateNumber()', () => {
    it('should throw an error if number is beyond', done => {
      try {
        Helpers.validateNumber('param', 10, 5, 0);
      } catch (error) {
        expect(error.message).toEqual('param must be a positive integer less than 5 and greater than 0');
        done();
      }
    });
  });

  describe('validateNumber()', () => {
    it('should throw an error if number is invalid', done => {
      try {
        Helpers.validateNumber('param', 'ten', 5, 0);
      } catch (error) {
        expect(error.message).toEqual('param must be a positive integer');
        done();
      }
    });
  });
});
