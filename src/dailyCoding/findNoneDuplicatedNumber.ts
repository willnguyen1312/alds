/*
Given an array of integers where every integer occurs three times except for one integer,
which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1.
Given [13, 19, 13, 13], return 19.
*/

export function findNoneDuplicatedNumber(numbs: number[]): number {
  const countMap: Record<number, number> = numbs.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})

  for (const countKey in countMap) {
    if (countMap[countKey] === 1) {
      return +countKey
    }
  }
}
