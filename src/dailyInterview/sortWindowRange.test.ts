import { sortWindowRange } from './sortWindowRange';

describe('sortWindowRange function', () => {
  it('should work', () => {
    expect(sortWindowRange([2, 4, 7, 5, 6, 8, 9])).toEqual([2, 4]);
    expect(sortWindowRange([2, 4, 7, 5, 6, 8, 9, 1])).toEqual([2, 7]);
  });
});
