/*
Hi, here's your problem today. This problem was recently asked by Google:

A look-and-say sequence is defined as the integer sequence beginning
with a single digit in which the next term is obtained by describing the previous term.
An example is easier to understand:

Each consecutive value describes the prior value.

1      #
11     # one 1's
21     # two 1's
1211   # one 2, and one 1.
111221 # #one 1, one 2, and two 1's.

Your task is, return the nth term of this sequence.
*/

export function lookAndSaySequence(n: number): string {
  if (n === 1) return "1"
  if (n === 2) return "11"

  let str = "11"

  for (let i = 3; i <= n; i++) {
    str += "$"
    let len = str.length

    let cnt = 1

    let tmp = ""
    let arr = str.split("")

    for (let j = 1; j < len; j++) {
      if (arr[j] !== arr[j - 1]) {
        tmp += cnt + 0

        tmp += arr[j - 1]

        cnt = 1
      } else {
        cnt++
      }
    }

    str = tmp
  }

  return str
}
