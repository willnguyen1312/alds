/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

You are given an array of integers. Return the length of the longest increasing subsequence
(not necessarily contiguous) in the array. 

Example:
[0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]

The following input should return 6 since the longest increasing subsequence is 0, 2, 6, 9 , 11, 15.
*/

export function longestIncreasingSequence(numbs: number[]): number {
  const length = numbs.length
  const memoizedList = Array(length).fill(0)

  // Initialize values for all indexes
  for (let i = 0; i < length; i++) {
    memoizedList[i] = 1
  }

  // Compute optimized LIS values
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbs[i] > numbs[j] && memoizedList[i] < memoizedList[j] + 1) {
        memoizedList[i] = memoizedList[j] + 1
      }
    }
  }

  return Math.max(...memoizedList)
}
