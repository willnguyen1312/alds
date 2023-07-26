/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Pascal's Triangle is a triangle where all numbers are the sum of the two numbers above it.
Here's an example of the Pascal's Triangle of size 5.
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
Given an integer n, generate the n-th row of the Pascal's Triangle.
*/

export function pascalTriangle(rowIndex: number): number[] {
  const result: number[] = [1]

  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return [1, 1]

  const rowRecord = pascalTriangle(rowIndex - 1)

  for (let i = 1; i < rowIndex; i++) {
    result[i] = rowRecord[i - 1] + rowRecord[i]
  }

  result.push(1)
  return result
}
