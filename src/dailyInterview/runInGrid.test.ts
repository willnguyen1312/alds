import { runInGrid } from './runInGrid';

describe('runInGrid function', () => {
  it('should work', () => {
    const actual = runInGrid([
      [0, 0],
      [1, 1],
      [1, 2],
    ]);

    expect(actual).toBe(2);
  });
});
