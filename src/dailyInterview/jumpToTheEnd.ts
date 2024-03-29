/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Starting at index 0, for an element n at index i, you are allowed to jump at most n indexes ahead.
Given a list of numbers, find the minimum number of jumps to reach the end of the list.

Example:
Input: [3, 2, 5, 1, 1, 9, 3, 4]
Output: 2
Explanation:

The minimum number of jumps to get to the end of the list is 2: 
3 -> 5 -> 4
*/

export function jumpToTheEnd(array: number[]) {
  if (array.length === 1) return 0

  let jumps = 0
  let maxReach = array[0]
  let steps = array[0]

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, i + array[i])
    steps--
    if (steps === 0) {
      jumps++
      steps = maxReach - i
    }
  }

  return jumps + 1
}
