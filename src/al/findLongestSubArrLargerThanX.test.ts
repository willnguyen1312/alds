import { findLongestSubArrLargerThanX } from './findLongestSubArrLargerThanX';

const cases: [number[], number, number[]][] = [
  [[1, 2, 3, 4, 4, 2], 3, [3, 4, 4]],
  [[1, 2, 3, 0, 4, 4, 2], 3, [3, 0, 4, 4]],
  [[1, 2, 3, 0, 0, 0, 0, 4, 4, 2], 3, [4, 4]],
  [[1, 2, 3, 3, 4, 0, 0, 0, 0, 0, 4, 4, 2], 3, [3, 3, 4]],
  [[1, 2, 3, 4, 0, 2, 5, 6, 7, 8], 3, [3, 4, 0]],
];

test.each(cases)(
  'findLongestSubArrLargerThanX(%s, %s) should be %s',
  (first, second, expected) => {
    expect(findLongestSubArrLargerThanX(first, second)).toEqual(expected);
  }
);
