/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a sorted list with duplicates, and a target number n,
find the range in which the number exists (represented as a tuple (low, high), both inclusive.
If the number does not exist in the list, return (-1, -1)).
*/

export function rangeSearchingInSortedList(
  numbs: number[],
  target: number,
): number[] {
  let start = -1
  let end = -1

  while (start < numbs.length) {
    const found = target === numbs[start]

    if (found) {
      end = start + 1
      while (end < numbs.length && numbs[start] === numbs[end]) {
        end++
      }

      return [start, end - 1]
    }

    start++
  }

  return [-1, -1]
}
