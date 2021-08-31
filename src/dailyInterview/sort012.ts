/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color
are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Can you do this in a single pass?

Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

export function sort012(numbs: number[]): number[] {
  const result = numbs.slice();

  let low = 0;
  let high = result.length - 1;
  let mid = 0;

  while (mid <= high) {
    if (result[mid] === 0) {
      [result[low], result[mid]] = [result[mid], result[low]];
      low++;
      mid++;
    } else if (result[mid] === 1) {
      mid++;
    } else {
      [result[high], result[mid]] = [result[mid], result[high]];
      high--;
    }
  }

  return result;
}
