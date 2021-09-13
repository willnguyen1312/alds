import { searchInRotateSortedArr } from './searchInRotateSortedArr';

describe('searchInRotateSortedArr function', () => {
  it('should work', () => {
    const actual = searchInRotateSortedArr([13, 18, 25, 2, 8, 10], 0, 5, 8);
    expect(actual).toBe(4);
  });
});
