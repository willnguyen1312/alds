// https://leetcode.com/problems/reverse-bits/submissions/
function reverseBits(n: number): number {
  const lst = n.toString(2).split("").reverse()

  let i = 0
  let j = 31
  let output = 0

  while (i < lst.length) {
    let product = 2 ** j
    output += Number(lst[i]) * product

    i++
    j--
  }

  return output
}
