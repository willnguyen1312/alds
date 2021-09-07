import { connectedColors } from './connectedColors';

describe('connectedColors function', () => {
  it('should work', () => {
    const grid = [
      [1, 0, 0, 1],
      [1, 1, 1, 1],
      [0, 1, 0, 0],
    ];
    const actual = connectedColors(grid);
    expect(actual).toBe(7);
  });
});
