import { rotateArrayInPlace } from './rotateArrayInPlace';

describe('rotateArrayInPlace function', () => {
  it('should work', () => {
    const actual = rotateArrayInPlace([1, 2, 3, 4, 5], 3);
    expect(actual).toEqual([3, 4, 5, 1, 2]);
  });
});
