/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given two binary numbers represented as strings, return the sum of the two binary numbers
as a new binary represented as a string.
Do this without converting the whole binary string into an integer.

Here's an example and some starter code.

def sum_binary(bin1, bin2):
  # Fill this in.
  
print(sum_binary("11101", "1011"))
# 101000
*/

export function sumBinaryNumber(first: string, second: string): number {
  const firstNumbs = first.split('').map(Number);
  const secondNumbs = second.split('').map(Number);
  const shorter = first.length > second.length ? secondNumbs : firstNumbs;
  const longer = first.length < second.length ? secondNumbs : firstNumbs;

  for (let index = shorter.length; index < longer.length; index++) {
    shorter.unshift(0);
  }

  const result: number[] = [];
  let carry = 0;

  for (let index = firstNumbs.length - 1; index >= 0; index--) {
    const firstNumb = firstNumbs[index];
    const secondNumb = secondNumbs[index];
    let sum = firstNumb + secondNumb + carry;
    carry = 0;

    if (sum > 1) {
      carry = 1;
      sum = sum % 2;
    }

    result.unshift(sum);
  }

  if (carry) {
    result.unshift(carry);
  }

  return +result.join('');
}
