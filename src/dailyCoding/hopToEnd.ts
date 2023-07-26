/*
This problem was asked by Pinterest.

Given an integer list where each number represents the number of hops you can make,
determine whether you can reach to the last index starting at index 0.

For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.
*/

export function hopToEnd(array: number[]): boolean {
  let maxReach = array[0]
  let steps = array[0]

  for (let i = 1; i < array.length - 1; i++) {
    steps--

    if (steps === 0 && maxReach === i + array[i]) {
      return false
    }

    maxReach = Math.max(maxReach, i + array[i])
    if (steps === 0) {
      steps = maxReach - i
    }
  }

  return maxReach >= array.length - 1
}
