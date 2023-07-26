/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a list of words in a string, reverse the words in-place
(ie don't create a new string and reverse the words).
*/

export function reverseString(str: string) {
  const words = str.split(" ")
  const length = words.length

  if (length % 2 == 0) {
    let j = Math.floor(length / 2)

    while (j < length) {
      ;[words[length - j - 1], words[j]] = [words[j], words[length - j - 1]]
      j += 1
    }
  } else {
    let j = Math.floor(length / 2) + 1

    while (j < length) {
      ;[words[length - j - 1], words[j]] = [words[j], words[length - j - 1]]
      j += 1
    }
  }

  return words.join(" ")
}
