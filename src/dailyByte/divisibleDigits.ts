/*
Given an integer N, return the total number self divisible numbers
that are strictly less than N (starting from one). 
Note: A self divisible number if a number that is divisible by all of its digits. 

Ex: Given the following value of N…

N = 17, return 12 because 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15 are all self divisible numbers.
*/

export function divisibleDigits(numb: number): number {
  let result = 0;

  function checkValid(n: number) {
    const digits = n.toString().split('').map(Number);

    for (const digit of digits) {
      const factor = n / digit;
      if (digit === 0 || factor !== Math.ceil(factor)) {
        return false;
      }
    }

    return true;
  }

  for (let index = 1; index < numb; index++) {
    if (checkValid(index)) {
      result++;
    }
  }

  return result;
}
