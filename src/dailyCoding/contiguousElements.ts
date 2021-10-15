/*
This problem was asked by Lyft.

Given a list of integers and a number K, return which contiguous elements of the list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9,
then it should return [2, 3, 4], since 2 + 3 + 4 = 9.
*/

export function contiguousElements(numbs: number[], target: number): number[] {
  const length = numbs.length;
  let start = 1;
  let end = 1;
  let currentSum = numbs[start];

  while (start < length && end < length) {
    while (currentSum < target) {
      end++;
      currentSum += numbs[end];
    }

    if (currentSum === target) {
      return numbs.slice(start, end + 1);
    }

    while (currentSum > target) {
      currentSum -= numbs[start];
      start++;
    }
  }

  return [];
}
