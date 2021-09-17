/*
This problem was asked by Microsoft.

Given an array of numbers, find the length of the longest increasing subsequence in the array.
The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
*/

export function longestIncreasingSubsequence(numbs: number[]): number {
  const length = numbs.length;
  const table = new Array(numbs.length).fill(1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbs[i] > numbs[j] && table[i] < table[j] + 1) {
        table[i] = table[j] + 1;
      }
    }
  }

  return table[length - 1];
}
