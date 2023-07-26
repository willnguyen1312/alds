/*
This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s)
return their sum (also as a binary string). 
Note: neither binary string will contain leading 0s unless the string itself is 0 

Ex: Given the following binary strings...

"100" + "1", return "101"
"11" + "1", return "100"
"1" + "0", return  "1"
*/

export function sumBinaryNumber(first: string, second: string): number {
  const firstNumbs = first.split("").map(Number)
  const secondNumbs = second.split("").map(Number)
  const shorter = first.length > second.length ? secondNumbs : firstNumbs
  const longer = first.length < second.length ? secondNumbs : firstNumbs

  for (let index = shorter.length; index < longer.length; index++) {
    shorter.unshift(0)
  }

  const result: number[] = []
  let carry = 0

  for (let index = firstNumbs.length - 1; index >= 0; index--) {
    const firstNumb = firstNumbs[index]
    const secondNumb = secondNumbs[index]
    let sum = firstNumb + secondNumb + carry
    carry = 0

    if (sum > 1) {
      carry = 1
      sum = sum % 2
    }

    result.unshift(sum)
  }

  if (carry) {
    result.unshift(carry)
  }

  return +result.join("")
}
