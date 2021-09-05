/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given two strings which represent non-negative integers,
multiply the two numbers and return the product as a string as well.
You should assume that the numbers may be sufficiently large such that the built-in integer type
will not be able to store the input (Python does have BigNum, but assume it does not exist).
*/

export function multiplyLargeNumbers(first: string, second: string): string {
  const firstLength = first.length;
  const secondLength = second.length;

  if (!firstLength || !secondLength) {
    return '0';
  }

  const result: number[] = [];
  let firstIndex = 0;
  let secondIndex = 0;

  for (let index = firstLength - 1; index >= 0; index--) {
    let carry = 0;
    const firstNumber = +first[index];
    secondIndex = 0;

    for (let jndex = secondLength - 1; jndex >= 0; jndex--) {
      const secondNumber = +second[jndex];

      const sum =
        firstNumber * secondNumber +
        (result[firstIndex + secondIndex] || 0) +
        carry;

      carry = Math.floor(sum / 10);
      result[firstIndex + secondIndex] = sum % 10;
      secondIndex++;
    }

    if (carry > 0) {
      result[firstIndex + secondIndex] += carry;
    }

    firstIndex++;
  }

  let index = result.length - 1;

  while (index >= 0 && !result[index]) {
    index--;
  }

  if (index === -1) {
    return '0';
  }

  let finalResult = '';

  while (index >= 0) {
    finalResult += result[index];
    index--;
  }

  return finalResult;
}
