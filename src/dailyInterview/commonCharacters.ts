/*

Hi, here's your problem today. This problem was recently asked by Apple:

Given a list of strings, find the list of characters that appear in all strings.
*/

export function commonCharacters(strs: string[]): string[] {
  const maxChar = 26
  const primary: boolean[] = Array(maxChar).fill(true)

  for (const str of strs) {
    const secondary: boolean[] = Array(maxChar).fill(false)

    for (let index = 0; index < str.length; index++) {
      const char = str[index]
      if (primary[char.charCodeAt(0) - "a".charCodeAt(0)]) {
        secondary[char.charCodeAt(0) - "a".charCodeAt(0)] = true
      }
    }

    for (let index = 0; index < primary.length; index++) {
      primary[index] = secondary[index]
    }
  }

  const result = primary.reduce((acc: string[], cur, index) => {
    if (cur) {
      acc.push(String.fromCharCode("a".charCodeAt(0) + index))
    }
    return acc
  }, [])

  return result
}
