import { moveZeros } from './moveZeros';

describe('moveZeros function', () => {
  it('should work', () => {
    expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });
});
