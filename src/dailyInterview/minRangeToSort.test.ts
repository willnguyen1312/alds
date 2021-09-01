import { minRangeToSort } from './minRangeToSort';

describe('minRangeToSort function', () => {
  it('should work', () => {
    expect(minRangeToSort([1, 7, 9, 5, 7, 8, 10])).toEqual([1, 5]);
  });
});
