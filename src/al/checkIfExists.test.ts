import { checkIfExist } from './checkIfExists';

describe('checkIfExists', () => {
  it('should work for the first case', () => {
    expect(checkIfExist([10, 2, 5, 3])).toBe(true);
  });

  it('should work for the second case', () => {
    expect(checkIfExist([3, 1, 7, 11])).toBe(false);
  });
});
