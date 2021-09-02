import { findLongestConsecutiveSubSequence } from './findLongestConsecutiveSubSequence';

describe('findLongestConsecutiveSubSequence function', () => {
  it('should work', () => {
    expect(findLongestConsecutiveSubSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  });
});
