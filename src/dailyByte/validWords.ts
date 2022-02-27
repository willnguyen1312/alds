// Given a string permitted and a string array, words, valid words are strings within words that only contain permitted characters. Return the total number of valid words.

// Ex: Given the following permitted and words…

// permitted = "abc", words = ["d", "ab", "abce"], return 1.
// Ex: Given the following permitted and words…

// permitted = "ake", words = ["ail", "kea", "a"], return 2.

export function validWords(permitted: string, words: string[]): number {
  const permittedSet = new Set(permitted);

  return words.filter((word) =>
    word.split('').every((char) => permittedSet.has(char))
  ).length;
}
