/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a list of numbers, for each element find the next element that is larger than the current element.
Return the answer as a list of indices. If there are no elements larger than the current element,
then use -1 instead.
*/

export function indexOfNextLargerNumber(numbs: number[]): number[] {
  const result = new Array(numbs.length)
  let i = 0
  let j = 1

  while (j < numbs.length) {
    if (numbs[j] > numbs[i]) {
      while (i < j) {
        result[i] = j
        i++
      }
    }
    j++
  }

  while (i < j) {
    result[i] = -1
    i++
  }

  return result
}
