/*
This question is asked by Facebook.
Given a string, reverse the vowels of it. 
Note: In this problem y is not considered a vowel. 

Ex: Given the following strings s…

s = "computer", return "cemputor"
Ex: Given the following strings s…

s = "The Daily Byte", return "The Dialy Byte"
*/

export function reverseVowels(str: string): string {
  const resultArr = str.split('');
  const vowerSet = new Set('aeiou');

  let i = 0;
  let j = resultArr.length - 1;

  while (i < j) {
    while (!vowerSet.has(resultArr[i]) && i < j) {
      i++;
    }

    while (!vowerSet.has(resultArr[j]) && i < j) {
      j--;
    }

    [resultArr[i], [resultArr[j]]] = [resultArr[j], [resultArr[i]]];
    i++;
    j--;
  }

  return resultArr.join('');
}
