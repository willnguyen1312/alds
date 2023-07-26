/*
Hi, here's your problem today. This problem was recently asked by Google:

Given an integer, find the number of 1 bits it has.
*/

export function numberOf1Bits(numb: number): number {
  const numbResult: number[] = []

  while (numb > 0) {
    numbResult.push(numb % 2)
    numb = Math.floor(numb / 2)
  }

  return numbResult.filter((numb) => numb === 1).length
}
