/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a non-empty array where each element represents a digit of a non-negative integer,
add one to the integer. The most significant digit is at the front of the array and each element in the array contains only one digit.
Furthermore, the integer does not have leading zeros, except in the case of the number '0'. 

Example:
Input: [2,3,4]
Output: [2,3,5]
*/

export function plusOne(numbs: number[]): number[] {
  const result = numbs.slice();
  let carry = 1;

  for (let index = numbs.length - 1; index >= 0; index--) {
    const element = numbs[index];
    const current = element + carry;

    result[index] = current % 10;

    carry = current > 9 ? 1 : 0;
  }

  if (carry === 1) {
    result.unshift(carry);
  }

  return result;
}
