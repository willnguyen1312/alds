/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a list of words, group the words that are anagrams of each other.
(An anagram are words made up of the same letters).

Example:

Input: ['abc', 'bcd', 'cba', 'cbd', 'efg']
Output: [['abc', 'cba'], ['bcd', 'cbd'], ['efg']]
*/

export function getAnagrams(strs: string[]): string[][] {
  const map = {}

  for (const str of strs) {
    const hashedStr = hashCoder(str)
    if (!map[hashedStr]) {
      map[hashedStr] = []
    }
    map[hashedStr].push(str)
  }

  return Object.values(map)
}

const hashCoder = (tableKey: string) => {
  let hash = 1

  for (const char of tableKey) {
    hash *= PRIMES[char]
  }

  return hash
}

const PRIMES = {
  a: 2,
  b: 3,
  c: 5,
  d: 7,
  e: 11,
  f: 13,
  g: 17,
  h: 19,
  i: 23,
  j: 29,
  k: 31,
  l: 37,
  m: 41,
  n: 43,
  o: 47,
  p: 53,
  q: 59,
  r: 61,
  s: 67,
  t: 71,
  u: 73,
  v: 79,
  w: 83,
  x: 89,
  y: 97,
  z: 101,
}
