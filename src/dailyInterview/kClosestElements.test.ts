import { kClosestElements } from './kClosestElements';

describe('kClosestElements function', () => {
  it('should work', () => {
    const actual = kClosestElements([1, 3, 7, 8, 9], 5, 3);
    expect(actual).toEqual([7, 3, 8]);
  });
});
