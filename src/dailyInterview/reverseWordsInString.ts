/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a string, you need to reverse the order of characters in each word within a sentence
while still preserving whitespace and initial word order.

Example 1:
Input: "The cat in the hat"
Output: "ehT tac ni eht tah"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

function reverseWord(str: string) {
  const strArr = str.split('');
  let start = 0;
  let end = strArr.length - 1;

  for (let index = 0; index < Math.floor(strArr.length / 2); index++) {
    [strArr[end - index], strArr[start + index]] = [strArr[start + index], strArr[end - index]];
  }

  return strArr.join('');
}

export function reverseWordsInString(str: string): string {
  const words = str.split(' ');

  for (let index = 0; index < words.length; index++) {
    words[index] = reverseWord(words[index]);
  }

  return words.join(' ');
}
