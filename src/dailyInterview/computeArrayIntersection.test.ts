import { computeArrayIntersection } from './computeArrayIntersection';

describe('computeArrayIntersection function', () => {
  it('should work', () => {
    expect(computeArrayIntersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
    expect(computeArrayIntersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([
      9, 4,
    ]);
  });
});
