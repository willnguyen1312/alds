import { findMissingNumber } from './findMissingNumber';

describe('findMissingNumber function', () => {
  it('should work', () => {
    expect(findMissingNumber([4, 5, 2, 6, 8, 2, 1, 5])).toEqual([3, 7]);
  });
});
