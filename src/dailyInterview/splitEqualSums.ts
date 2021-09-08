/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given an array of numbers, determine whether it can be partitioned into 3 arrays of equal sums.
*/

export function splitEqualSums(arr: number[]): boolean {
  const length = arr.length;
  let preSum = 0;

  let i1 = -1;
  let i2 = -1;

  let sum = arr.reduce((acc, cur) => acc + cur);

  if (sum % 3 !== 0) return false;

  const sum1 = sum / 3;
  const rest = 2 * sum1;

  for (let i = 0; i < length; i++) {
    preSum += arr[i];

    if (preSum === sum1 && i1 === -1) {
      i1 = i;
    } else if (preSum === rest && i1 !== -1) {
      i2 = i;
      break;
    }
  }

  if (i1 !== -1 && i2 !== -1) {
    return true;
  }

  return false;
}
