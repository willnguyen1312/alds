/*
This problem was asked Microsoft.

Using a read7() method that returns 7 characters from a file,
implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”,
three read7() returns “Hello w”, “orld” and then “”.
*/

export function readFile(numb: number) {
  return function (content: string) {
    let current = 0

    return function () {
      const result = content.slice(current, current + numb)
      current = Math.min(content.length, current + numb)
      return result
    }
  }
}
