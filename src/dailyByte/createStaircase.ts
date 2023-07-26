// Given a value, N, you are asked to form a staircase.
// The number of elements in each row of the staircase must match the current row.
// Return the total number of full staircase rows you can create.

export function createStaircase(n: number): number {
  let result = 0
  let remain = n
  let currentRowLength = 1

  while (currentRowLength <= remain) {
    remain -= currentRowLength
    result++
    currentRowLength++
  }

  return result
}
