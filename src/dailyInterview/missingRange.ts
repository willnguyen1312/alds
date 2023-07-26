/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a sorted list of numbers, and two integers low and high representing
the lower and upper bound of a range, return a list of (inclusive) ranges where the numbers are missing.
A range should be represented by a tuple in the format of (lower, upper).
*/

export function missingRange(numbs: number[]): number[][] {
  const result: number[][] = []
  let nextNumber = numbs[0] + 1

  for (let index = 1; index < numbs.length; index++) {
    const element = numbs[index]

    if (element - nextNumber >= 1) {
      result.push([nextNumber, element - 1])
    }
    nextNumber = element + 1
  }

  return result
}
