import { searchInMatrix } from './searchInMatrix';

describe('searchInMatrix function', () => {
  it('should work', () => {
    const mat = [
      [1, 3, 5, 8],
      [10, 11, 15, 16],
      [24, 27, 30, 31],
    ];

    expect(searchInMatrix(mat, 4)).toBe(false);
    expect(searchInMatrix(mat, 10)).toBe(true);
  });
});
