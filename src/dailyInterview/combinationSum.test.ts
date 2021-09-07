import { combinationSum } from './combinationSum';

describe('combinationSum function', () => {
  it('should work', () => {
    const actual = combinationSum([2, 3, 6, 7], 7);
    expect(actual).toEqual([[2, 2, 3], [7]]);
  });
});
