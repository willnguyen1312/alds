/*
This question is asked by Google. Given two strings, s and t,
return the length of their longest subsequence. 

Ex: Given the following strings s and t…

s = "xyz", t = "xyz". return 3.
Ex: Given the following strings s and t…

s = "abca", t = "acea", return 3.
Ex: Given the following strings s and t…

s = "abc", t = "def", return 0.
*/

export function longestCommonSubsequence(str1: string, str2: string) {
  const lengths: number[][] = []

  for (let i = 0; i < str2.length + 1; i++) {
    lengths.push(new Array(str1.length + 1).fill(0))
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lengths[i][j] = lengths[i - 1][j - 1] + 1
      } else {
        lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1])
      }
    }
  }

  return lengths[str2.length][str1.length]
}
