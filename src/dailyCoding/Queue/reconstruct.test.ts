import { reconstruct } from './reconstruct';

describe('reconstruct function', () => {
  it('should work', () => {
    const actual = reconstruct(['+', '+', '+', '-', '+']);
    expect(actual).toEqual([0, 1, 3, 2, 4]);
  });
});
