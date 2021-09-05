import { indexOfNextLargerNumber } from './indexOfNextLargerNumber';

describe('indexOfNextLargerNumber function', () => {
  it('should work', () => {
    const actual = indexOfNextLargerNumber([3, 2, 5, 6, 9, 8]);
    expect(actual).toEqual([2, 2, 3, 4, -1, -1]);
  });
});
