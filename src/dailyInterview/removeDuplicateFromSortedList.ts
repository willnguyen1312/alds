/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a sorted list of size n, with m unique elements (thus m < n),
modify the list such that the first m unique elements in the list will be sorted,
ignoring the rest of the list. Your solution should have a space complexity of O(1).
Instead of returning the list (since you are just modifying the original list), you should return what m is.
*/

export function removeDuplicateFromSortedList(numbs: number[]): number {
  if (numbs.length === 1) {
    return 1
  }

  let i = 0
  let j = i + 1

  while (i < numbs.length) {
    while (numbs[i] === numbs[j]) {
      j++
    }

    numbs.splice(i, j - i - 1)

    i++
    j = i + 1
  }

  return numbs.length
}
