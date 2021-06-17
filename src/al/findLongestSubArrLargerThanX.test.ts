import { findLongestSubArrLargerThanX } from './findLongestSubArrLargerThanX';

test('findLongestSubArrLargerThanX should work', () => {
  const input = [1, 2, 3, 4, 4, 2];
  const expected = [3, 4, 4];

  expect(findLongestSubArrLargerThanX(input, 3)).toEqual(expected);
});
