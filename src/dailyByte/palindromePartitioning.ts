/*
This question is asked by Google. Given a string s,
return all possible partitions of s such that each substring is a palindrome.

Ex: Given the following string s…

s = "abcba",
return [
    ["a","b","c","b","a"],
    ["a","bcb","a"],
    ["abcba"]
]
*/

function isPalindrome(s: string): boolean {
  if (s.length === 0) {
    return true;
  }

  const n = s.length;
  let p1 = 0;
  let p2 = n - 1;
  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
}

export function palindromePartitioning(str: string): string[][] {
  if (str.length === 0) {
    return [];
  }

  const results: string[][] = [];
  const length = str.length;

  function backtrack(result: string[] = [], curr = 0) {
    if (curr === length) {
      results.push(result);
    } else {
      for (let i = curr; i < length; i++) {
        const segment = str.slice(curr, i + 1);
        if (isPalindrome(segment)) {
          backtrack([...result, segment], i + 1);
        }
      }
    }
  }

  backtrack();
  return results;
}
