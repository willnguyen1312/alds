/*
Hi, here's your problem today. This problem was recently asked by Twitter:
A palindrome is a sequence of characters that reads the same backwards and forwards. Given a string, s, find the longest palindromic substring in s.

Example:
Input: "banana"
Output: "anana"

Input: "million"
Output: "illi"
*/

export function getLongestPalindromicSubstring(str: string): string {
  let currentLongest = [0, 1];

  for (let index = 1; index < str.length; index++) {
    const odd = getLongerPalindromeFrom(str, index - 1, index + 1);
    const even = getLongerPalindromeFrom(str, index - 1, index);

    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }

  return str.slice(currentLongest[0], currentLongest[1]);
}

function getLongerPalindromeFrom(
  str: string,
  leftIdx: number,
  rightIdx: number
) {
  while (leftIdx >= 0 && rightIdx < str.length) {
    if (str[leftIdx] !== str[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }

  return [leftIdx + 1, rightIdx];
}
