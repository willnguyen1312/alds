import { fourSum, fourSum2 } from './fourSum';

describe('fourSum function', () => {
  it('should work', () => {
    const actual = fourSum([1, 1, -1, 0, -2, 1, -1], 0);
    expect(actual).toEqual([1, 1, 0, -2]);
    const actual2 = fourSum2([1, 1, -1, 0, -2, 1, -1], 0);
    expect(actual2).toEqual([
      [-2, 0, 1, 1],
      [-1, -1, 1, 1],
    ]);
  });
});
