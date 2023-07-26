/*
This question is asked by Facebook.

Given a character array, compress it in place and return the new length of the array. 
Note: You should only compress the array if its compressed form
will be at least as short as the length of its original form. 

Ex: Given the following character array chars…

chars = ['a', 'a', 'a', 'a', 'a', 'a'], return 2.
chars should be compressed to look like the following:
chars = ['a', '6']
Ex: Given the following character array chars…

chars = ['a', 'a', 'b', 'b', 'c', 'c'], return 6.
chars should be compressed to look like the following:
chars = ['a', '2', 'b', '2', 'c', '2']
Ex: Given the following character array chars…

chars = ['a', 'b', 'c'], return 3.
In this case we chose not to compress chars.
*/

export function stringCompression(strs: string[]): number {
  const compressionResult: string[] = []
  let current = 0

  while (current < strs.length) {
    let forward = current + 1

    while (forward < strs.length && strs[current] === strs[forward]) {
      forward++
    }

    compressionResult.push(strs[current], `${forward - current}`)
    current = forward
  }

  return compressionResult.length
}
