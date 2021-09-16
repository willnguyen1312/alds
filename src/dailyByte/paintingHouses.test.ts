import { paintingHouses } from './paintingHouses';

describe('paintingHouses function', () => {
  it('should work', () => {
    const actual = paintingHouses([
      [1, 3, 5],
      [2, 4, 6],
      [5, 4, 3],
    ]);
    expect(actual).toBe(8);
  });
});
