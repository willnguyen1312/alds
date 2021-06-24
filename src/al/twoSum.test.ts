import { twoSum } from './twoSum';

describe('twoSum', () => {
  it('should work 1 as expected', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];

    expect(twoSum(nums, target)).toEqual(expected);
  });

  it('should work 1 as expected', () => {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];

    expect(twoSum(nums, target)).toEqual(expected);
  });
});
