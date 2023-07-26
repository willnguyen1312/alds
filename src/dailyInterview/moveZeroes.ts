/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

export function moveZeros(numbs: number[]) {
  let i = 0
  let j = 0

  while (i < numbs.length) {
    if (numbs[i] !== 0) {
      ;[numbs[j], numbs[i]] = [numbs[i], numbs[j]]
      j++
    }
    i++
  }

  return numbs
}
