import { fixedPoint } from './fixedPoint';

describe('fixedPoint function', () => {
  it('should work', () => {
    expect(fixedPoint([-5, 1, 2, 3])).toBe(1);
  });
});
