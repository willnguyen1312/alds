import { moveZeroes } from './moveZeros';

describe('moveZeros', () => {
  it('should work for the first case', () => {
    const input = [0, 1, 0, 3, 12];
    moveZeroes(input);
    expect(input).toEqual([1, 3, 12, 0, 0]);
  });
});
