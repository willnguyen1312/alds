/*
Given a list of words, return all the words that require only a single row of a keyboard to type. 
Note: You may assume that all words only contain lowercase alphabetical characters. 

Ex: Given the following list of words…

words = ["two", "dad", "cat"], return ["two", "dad"].
Ex: Given the following list of words…

words = ["ufo", "xzy", "byte"], return [].
*/

export function keyboardRow(strs: string[]): string[] {
  const result: string[] = []
  const rowsMaps: Set<string>[] = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ]

  for (const str of strs) {
    const firstChar = str[0]
    const foundRow = rowsMaps.find((row) => row.has(firstChar))

    if (foundRow) {
      let valid = true
      for (let index = 1; index < str.length; index++) {
        const char = str[index]
        if (!foundRow.has(char)) {
          valid = false
          break
        }
      }
      if (valid) {
        result.push(str)
      }
    }
  }

  return result
}
