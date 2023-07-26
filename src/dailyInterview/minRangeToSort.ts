/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a list of integers, return the bounds of the minimum range that must be sorted
so that the whole list would be sorted.

Example:
Input: [1, 7, 9, 5, 7, 8, 10]
Output: (1, 5)
Explanation:
The numbers between index 1 and 5 are out of order and need to be sorted.
*/

export function minRangeToSort(numbs: number[]): number[] {
  const length = numbs.length
  let start = 0
  let end = length - 1
  let i
  let max
  let min

  for (start = 0; start < length - 1; start++) {
    if (numbs[start] > numbs[start + 1]) break
  }

  if (start === length - 1) {
    return []
  }

  for (end = length - 1; end > 0; end--) {
    if (numbs[end] < numbs[end - 1]) break
  }

  max = numbs[start]
  min = numbs[start]

  for (let i = start + 1; i <= end; i++) {
    if (numbs[i] > max) max = numbs[i]
    if (numbs[i] < min) min = numbs[i]
  }

  for (let i = 0; i < start; i++) {
    if (numbs[i] > min) {
      start = i
      break
    }
  }

  for (i = length - 1; i >= end + 1; i--) {
    if (numbs[i] < max) {
      end = i
      break
    }
  }

  return [start, end]
}
