import { findMaxMin } from './findMaxMin';

describe('findMaxMin function', () => {
  it('should work', () => {
    expect(findMaxMin([3, 5, 1, 2, 4, 8])).toEqual([1, 8]);
  });
});
