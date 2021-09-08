import { mountainArray } from './mountainArray';

describe('mountainArray function', () => {
  it('should work', () => {
    const actual1 = mountainArray([1, 2, 3]);
    expect(actual1).toBe(false);
    const actual2 = mountainArray([1, 2, 3]);
    expect(actual2).toBe(false);
  });
});
