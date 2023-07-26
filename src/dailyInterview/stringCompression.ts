/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given an array of characters with repeats, compress it in place.
The length after compression should be less than or equal to the original array.

Example:
Input: ['a', 'a', 'b', 'c', 'c', 'c']
Output: ['a', '2', 'b', 'c', '3']
*/

export function stringCompression(strs: string[]): string[] {
  let result: string[] = []
  let count = 0
  let currentLetter = ""

  function addToResult(str: string) {
    if (count > 0) {
      result.push(currentLetter)
    }

    if (count > 1) {
      result.push(count.toString())
    }
  }

  for (const str of strs) {
    if (str !== currentLetter) {
      addToResult(str)

      currentLetter = str
      count = 1
      continue
    }

    count++
  }

  addToResult(currentLetter)

  return result
}
