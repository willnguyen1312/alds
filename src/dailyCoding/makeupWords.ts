/*
This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces),
return the original sentence in a list. If there is more than one possible reconstruction,
return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox",
you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond",
return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

export function makeupWords(word: string, strs: string[]): string[] {
  const strSet = new Set(strs)

  function makeupWordsHelper(str: string, output: string[] = []): string[] {
    if (str === word) {
      return output
    }

    let leftOver = word.slice(str.length)
    let i = 0
    let j = 0

    while (j < leftOver.length) {
      const currentWord = leftOver.slice(i, j + 1)
      const found = strSet.has(currentWord)
      if (found) {
        const gotIt = makeupWordsHelper(
          str + currentWord,
          output.concat(currentWord),
        )

        if (gotIt) {
          return gotIt
        }
      }
      j++
    }
  }

  const result = makeupWordsHelper("")
  return result
}
