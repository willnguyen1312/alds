import { twoSum } from './twoSum';

describe('twoSum function', () => {
  it('should work', () => {
    expect(twoSum([4, 7, 1, -3, 2], 5)).toBe(true);
    expect(twoSum([4, 7, 1, -3, 2], 20)).toBe(false);
  });
});
