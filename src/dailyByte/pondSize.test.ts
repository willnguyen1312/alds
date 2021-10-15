import { pondSize } from './pondSize';

describe('pondSize function', () => {
  it('should work', () => {
    const actual = pondSize([
      [1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1],
    ]);

    expect(actual).toBe(4);
  });
});
