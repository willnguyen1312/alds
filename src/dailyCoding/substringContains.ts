/*
This problem was asked by Square.

Given a string and a set of characters, return the shortest substring containing all the characters in the set.

For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

If there is no substring containing all the characters in the set, return null.
*/

export function substringContains(str: string, chars: string[]): string {
  const charSet = new Set(chars)
  const hash: Map<string, number> = new Map()
  let result = ""

  function getResultString() {
    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE

    for (const [_, value] of hash) {
      min = Math.min(min, value)
      max = Math.max(max, value)
    }

    const sub = str.slice(min, max + 1)
    if (result.length === 0) {
      return sub
    }

    return sub.length < result.length ? sub : result
  }

  for (let index = 0; index < str.length; index++) {
    const element = str[index]
    if (charSet.has(element)) {
      hash.set(element, index)
    }

    if (hash.size === charSet.size) {
      result = getResultString()
    }
  }

  return result
}
