/*
This question is asked by Google

Given two strings s and t return whether or not s is a subsequence of t. 
Note: You may assume both s and t only consist of lowercase characters
and both have a length of at least one. 

Ex: Given the following strings s and t…

s = "abc", t = "aabbcc", return true.
Ex: Given the following strings s and t…

s = "cpu", t = "computer", return true.
Ex: Given the following strings s and t…

s = "xyz", t = "axbyc", return false.
*/

export function checkSubsequence(first: string, second: string): boolean {
  const firstArr: string[] = first.split('');
  const secondSet: Set<string> = new Set(second);

  return firstArr.every((char) => secondSet.has(char));
}
