/*
This problem was asked by Facebook.

Given a multiset of integers, return whether it can be partitioned into two subsets
whose sums are the same.

For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true,
since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.

Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into
two subsets that add up to the same sum.
*/

// https://www.geeksforgeeks.org/partition-problem-dp-18/
export function partitionIntoTwoSubset(arr: number[], n = arr.length): boolean {
  const sum = arr.reduce((a, b) => a + b)

  if (sum % 2) return false

  const table = Array.from({ length: Math.floor(sum / 2) + 1 }, () =>
    new Array(n + 1).fill(0),
  )

  for (let i = 0; i <= n; i++) table[0][i] = true
  for (let i = 1; i <= Math.floor(sum / 2); i++) table[i][0] = false

  // Fill the partition table in bottom up manner
  for (let i = 1; i <= Math.floor(sum / 2); i++) {
    for (let j = 1; j <= n; j++) {
      table[i][j] = table[i][j - 1]
      if (i >= arr[j - 1]) {
        table[i][j] = table[i][j] || table[i - arr[j - 1]][j - 1]
      }
    }
  }

  return table[Math.floor(sum / 2)][n]
}
