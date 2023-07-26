// Given a string, s, return the length of the longest substring that only contains one unique character.
// Note: s is non-empty and it is guaranteed there is a single answer.

// Ex: Given the following string s…

// s = "aabc", return 2 ("aa" is length 2).
// Ex: Given the following string s…

// s = "abcabbccabccc", return 3.

export function longestSingleSubstr(str: string): number {
  let result = 0

  let current = 0

  while (current < str.length - result) {
    let char = str[current]
    let count = 1

    while (current + 1 < str.length && str[current + 1] === char) {
      count++
      current++
    }

    if (count > result) {
      result = count
    }

    current++
  }

  return result
}
