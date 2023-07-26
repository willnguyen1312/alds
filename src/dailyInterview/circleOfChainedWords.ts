/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Two words can be 'chained' if the last character of the first word is the same
as the first character of the second word. 

Given a list of words, determine if there is a way to 'chain' all the words in a circle.

Example:
Input: ['eggs', 'karat', 'apple', 'snack', 'tuna']
Output: True
Explanation:
The words in the order of ['apple', 'eggs', 'snack', 'karat', 'tuna'] creates a circle of chained words.
*/

export function circleOfChainedWords(words: string[]): boolean {
  const hashCount: Map<string, number> = new Map()

  for (const word of words) {
    const first = word[0]
    const last = word[word.length - 1]

    hashCount.set(first, (hashCount.get(first) || 0) + 1)
    hashCount.set(last, (hashCount.get(last) || 0) + 1)
  }

  for (const item of hashCount) {
    const [_, count] = item
    if (count % 2) {
      return false
    }
  }

  return true
}
