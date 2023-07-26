/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given an array of integers of size n, where all elements are between 1 and n inclusive,
find all of the elements of [1, n] that do not appear in the array.
Some numbers may appear more than once.

Example:
Input: [4,5,2,6,8,2,1,5]
Output: [3,7]
*/

export function findMissingNumber(numbs: number[]): number[] {
  const result = []

  for (const number of numbs) {
    const index = Math.abs(number) - 1
    if (numbs[index] > 0) {
      numbs[index] = -numbs[index]
    }
  }

  for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] > 0) {
      result.push(i + 1)
    }
  }

  return result
}
