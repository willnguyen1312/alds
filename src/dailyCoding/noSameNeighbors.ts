/*
This question is asked by Facebook.

Given a string, check if it can be modified such that no two adjacent characters are the same.
If it is possible, return any string that satisfies this condition and
if it is not possible return an empty string. 

Ex: Given the following string s…

s = "abb", return "bab".
Ex: Given the following string s…

s = "xxxy", return "" since it is not possible to modify s
such that no two adjacent charactersare the same.
*/

export function noSameNeighbors(str: string) {
  const charCount = {}

  for (const char of str) {
    charCount[char] = charCount[char] + 1 || 1
  }

  let max = Number.MIN_VALUE
  let maxLetter = ""

  const chars = Object.keys(charCount)

  chars.forEach((char) => {
    if (charCount[char] > max) {
      max = charCount[char]
      maxLetter = char
    }
  })

  const stringLength = str.length

  if (max > (stringLength + 1) / 2) return ""

  const reorganizedChars = new Array(str.length)

  // Start with even index to fill maxLetter
  let index = 0

  while (charCount[maxLetter] > 0) {
    reorganizedChars[index] = maxLetter
    index += 2
    charCount[maxLetter]--
  }

  // Start with odd index
  index = 1

  for (const char of chars) {
    while (charCount[char] > 0) {
      reorganizedChars[index] = char
      index += 2
      charCount[char]--
    }
  }

  return reorganizedChars.join("")
}
