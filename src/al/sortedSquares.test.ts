import { sortedSquares } from './sortedSquares';

describe('sortedSquares', () => {
  it('should work for the first case', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });

  it('should work for the second case', () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });
});
