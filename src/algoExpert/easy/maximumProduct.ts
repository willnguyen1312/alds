/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

You are given an array of integers. Return the largest product that can be made by multiplying any 3 integers in the array.

Example:

[-4, -4, 2, 8] should return 128 as the largest product can be made by multiplying -4 * -4 * 8 = 128.
*/

export function maximumProduct(nums: number[]): number {
  const max = nums.sort((a, b) => a - b);
  const product1 = max[0] * max[1] * max[nums.length - 1];
  const product2 = max[nums.length - 1] * max[nums.length - 2] * max[nums.length - 3];
  return Math.max(product1, product2);
}

export function maximumProduct2(nums: number[]): number {
  let max1, max2, max3, min1, min2;
  max1 = max2 = max3 = -Infinity;
  min1 = min2 = Infinity;

  for (let n of nums) {
    if (n <= min1) {
      // n is less than min1, min2
      min2 = min1;
      min1 = n;
    } else if (n <= min2) {
      // n lies between min1 and min2
      min2 = n;
    }

    if (n >= max1) {
      // n is greater than max1, max2 and max3
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n >= max2) {
      // n lies between max1 and max2
      max3 = max2;
      max2 = n;
    } else if (n >= max3) {
      // n lies between max2 and max3
      max3 = n;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}
