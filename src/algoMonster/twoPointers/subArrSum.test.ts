import { subArrSum } from './subArrSum';

describe('subArrSum function', () => {
  it('should work', () => {
    expect(subArrSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toEqual([1, 5]);
  });
});
