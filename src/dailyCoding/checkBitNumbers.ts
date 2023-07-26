/*
This problem was asked by Facebook.

Given three 32-bit integers x, y, and b,
return x if b is 1 and y if b is 0, using only mathematical or bit operations.
You can assume b can only be 1 or 0.
*/

function powerFunction(x: number, y: number): number {
  if (y === 0) return 1

  const temp = powerFunction(x, Math.floor(y / 2))

  if (y % 2 === 0) return temp * temp

  return x * temp * temp
}

function toDecimal(str: string): number {
  const length = str.length
  let result = 0

  for (let index = length - 1; index >= 0; index--) {
    const element = +str[index] * powerFunction(2, length - 1 - index)
    result += element
  }

  return result
}

export function checkBitNumbers(x: string, y: string, b: string): number {
  const decimalX = toDecimal(x)
  const decimalY = toDecimal(y)
  const decimalB = toDecimal(b)

  return decimalB ? decimalX : decimalY
}
