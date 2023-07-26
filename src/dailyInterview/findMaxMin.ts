/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a list of numbers of size n, where n is greater than 3, find the maximum and minimum of the list
using less than 2 * (n - 1) comparisons.
*/

export function findMaxMin(numbs: number[]): number[] {
  if (numbs.length === 1) {
    return [numbs[0], numbs[0]]
  }
  let min = Math.min(numbs[0], numbs[1])
  let max = Math.max(numbs[0], numbs[1])

  for (let i = 2; i < numbs.length; i++) {
    if (numbs[i] > max) {
      max = numbs[i]
    } else if (numbs[i] < min) {
      min = numbs[i]
    }
  }

  return [min, max]
}
