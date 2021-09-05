/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a string, determine if you can remove any character to create a palindrome.
*/

function checkPalindrome(str: string, low: number, high: number): boolean {
  while (low < high) {
    if (str[low] !== str[high]) {
      return false;
    }

    low += 1;
    high -= 1;
  }

  return true;
}

export function removeCharacterToCreatePalindrome(str: string): boolean {
  let low = 0;
  let high = str.length - 1;

  while (low < high) {
    if (str[low] === str[high]) {
      low += 1;
      high -= 1;
    } else {
      if (checkPalindrome(str, low + 1, high)) {
        return true;
      }

      if (checkPalindrome(str, low, high - 1)) {
        return true;
      }

      low++;
      high--;
    }
  }

  return false;
}
