/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

You are given an array of integers in an arbitrary order. Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

Example:

[13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.

[13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.
*/

export function nonDecreasingArrayWithSingleModification(
  numbs: number[],
): boolean {
  let count = 0

  for (let i = 0; i < numbs.length - 1; i++) {
    if (numbs[i] > numbs[i + 1]) {
      if (i - 1 >= 0) {
        if (numbs[i - 1] > numbs[i + 1]) {
          numbs[i + 1] = numbs[i]
        }
      }

      count++
    }

    if (count >= 2) {
      return false
    }
  }

  return count < 2
}
