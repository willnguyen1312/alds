import { moveZeros } from './moveZeroes';

describe('moveZeros function', () => {
  it('should work', () => {
    expect(moveZeros([0, 0, 0, 2, 0, 1, 3, 4, 0, 0])).toEqual([2, 1, 3, 4, 0, 0, 0, 0, 0, 0]);
    expect(moveZeros([2, 0, 1, 3])).toEqual([2, 1, 3, 0]);
  });
});
