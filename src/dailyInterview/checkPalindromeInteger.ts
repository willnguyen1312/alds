/*
Hi, here's your problem today.
This problem was recently asked by Twitter:

Given an integer, check if that integer is a palindrome.
For this problem do not convert the integer to a string to check if it is a palindrome.
*/

export function checkPalindromeInteger(numb: number) {
  const numbInStrs = numb.toString().split('');
  const length = numbInStrs.length;
  let middle = Math.floor(length / 2) - 1;

  while (middle >= 0) {
    const left = numbInStrs[middle];
    const right = numbInStrs[length - middle - 1];

    if (left !== right) {
      return false;
    }

    middle--;
  }

  return true;
}
