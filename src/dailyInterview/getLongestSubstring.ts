/*
Hi, here's your problem today. This problem was recently asked by Microsoft:
Given a string, find the length of the longest substring without repeating characters.
*/
export function getLongestSubstring(str: string): number {
  const seen: Record<string, number> = {}
  let start = 0
  let result = 0

  for (let index = 0; index < str.length; index++) {
    const char = str[index]

    if (seen[char]) {
      start = Math.max(start, seen[char] + 1)
    }

    seen[char] = index
    result = Math.max(result, index - start + 1)
  }

  return result
}
