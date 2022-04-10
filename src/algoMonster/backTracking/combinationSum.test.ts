import { combinationSum } from './combinationSum';

describe('combinationSum function', () => {
  it('should work', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });
});
