/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a list of numbers, find the smallest window to sort such that the whole list will be sorted.
If the list is already sorted return (0, 0). You can assume there will be no duplicate numbers.

Example:
Input: [2, 4, 7, 5, 6, 8, 9]
Output: (2, 4)
Explanation: Sorting the window (2, 4) which is [7, 5, 6] will also means that the whole list is sorted.
*/

export function sortWindowRange(numbs: number[]): number[] {
  let firstPeak
  let maxPeak = Number.MIN_VALUE

  for (let index = 1; index < numbs.length - 1; index++) {
    const prev = numbs[index - 1]
    const cur = numbs[index]
    const next = numbs[index + 1]

    if (cur > prev && cur > next) {
      firstPeak = firstPeak || index
      maxPeak = Math.max(maxPeak, cur)
    }
  }

  for (let index = numbs.length - 1; index > 0; index--) {
    const element = numbs[index]
    if (element < maxPeak) {
      return [firstPeak, index]
    }
  }

  return []
}
