import { isMonotonic } from './isMonotonic';

describe('isMonotonic function', () => {
  it('should work', () => {
    const actual1 = isMonotonic([1, 2, 3, 4, 4, 5]);
    expect(actual1).toBe(true);

    const actual2 = isMonotonic([7, 6, 3]);
    expect(actual2).toBe(true);

    const actual3 = isMonotonic([8, 4, 6]);
    expect(actual3).toBe(false);
  });
});
