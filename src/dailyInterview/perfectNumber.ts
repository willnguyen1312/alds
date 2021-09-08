/*
Hi, here's your problem today. This problem was recently asked by Facebook:

A Perfect Number is a positive integer that is equal to the
sum of all its positive divisors except itself.
*/

export function perfectNumber(numb: number): boolean {
  let i = 1;
  let sum = 0;

  while (i < numb) {
    if (numb % i === 0) {
      sum += i;
    }

    if (sum === numb) {
      return true;
    }

    i++;
  }

  return false;
}
