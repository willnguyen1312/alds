/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a list of strings, find the longest common prefix between all strings.
*/

function commonPrefixUtil(str1: string, str2: string): string {
  let result = ""
  let n1 = str1.length
  let n2 = str2.length

  for (let i = 0, j = 0; i < n1 && j < n2; i++, j++) {
    if (str1[i] !== str2[j]) {
      break
    }
    result += str1[i]
  }

  return result
}

export function longestCommonPrefix(strs: string[]): string {
  const length = strs.length
  let prefix = strs[0]

  for (let i = 1; i < length; i++) {
    prefix = commonPrefixUtil(prefix, strs[i])
  }

  return prefix
}
