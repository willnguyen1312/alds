export function groupAnagrams(str: string[]): string[][] {
  const anagrams: Record<string, string[]> = {}

  for (const word of str) {
    const sortedWord = word.split("").sort().join("")
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word)
    } else {
      anagrams[sortedWord] = [word]
    }
  }

  return Object.values(anagrams)
}
