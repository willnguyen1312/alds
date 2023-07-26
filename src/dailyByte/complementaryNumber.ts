/*
Given a positive number, return its complementary number. 
Note: The complement of a number is the number that results from
flipping every bit in the original number.
(i.e. zero bits become one bits and one bits become zero bits). 

Ex: Given the following number…

number = 27, return 4.
27 in binary (not zero extended) is 11011.
Therefore, the complementary binary is 00100 which is 4.
*/

function toBinary(numb: number): number[] {
  const result: number[] = []

  while (numb > 0) {
    const remainder = numb % 2
    result.unshift(remainder)
    numb = Math.floor(numb / 2)
  }

  return result
}

export function complementaryNumber(numb: number): number {
  const binaryNumb = toBinary(numb)
  const flippingNumb = binaryNumb.map((numb) => (numb === 0 ? 1 : 0)).reverse()

  return flippingNumb.reduce((acc: number, cur, index) => {
    if (cur) {
      acc += Math.pow(2, index)
    }
    return acc
  }, 0)
}
