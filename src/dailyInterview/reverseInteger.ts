/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given an integer, reverse the digits. Do not convert the integer into a string and reverse it.
*/

export function reverseInteger(num: number): number {
  let result = 0;

  while (num > 0) {
    result = result * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return result;
}
