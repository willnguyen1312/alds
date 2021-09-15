import { arrayIntersection } from './arrayIntersection';

describe('arrayIntersection function', () => {
  it('should work', () => {
    const actual = arrayIntersection([2, 4, 4, 2], [2, 4]);
    expect(actual).toEqual([2, 4]);

    const actual2 = arrayIntersection([2, 4, 6, 8], [1, 3, 5, 7]);
    expect(actual2).toEqual([]);
  });
});
