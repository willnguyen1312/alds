/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

Example 1:
Input: A = "ab", B = "ba"
Output: true
Example 2:

Input: A = "ab", B = "ab"
Output: false
Example 3:
Input: A = "aa", B = "aa"
Output: true
Example 4:
Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
Example 5:
Input: A = "", B = "aa"
Output: false
*/

export function buddyStrings(first: string, second: string): boolean {
  if (first.length !== second.length) {
    return false;
  }

  if (first === second && first.length !== new Set(second).size) {
    return true;
  }

  const diff: number[] = [];

  for (let index = 0; index < first.length; index++) {
    const firstEle = first[index];
    const secondEle = second[index];

    if (firstEle !== secondEle) {
      diff.push(index);
    }

    if (diff.length > 2) {
      return false;
    }
  }

  return (
    diff.length === 2 &&
    first[diff[0]] === second[diff[1]] &&
    first[diff[1]] === second[diff[0]]
  );
}
