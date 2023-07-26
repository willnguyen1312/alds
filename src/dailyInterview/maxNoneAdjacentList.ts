/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a list of positive numbers, find the largest possible set such that
no elements are adjacent numbers of each other.
*/

export function maxNoneAdjacentList(numbs: number[]): number {
  const n = numbs.length
  let incl = numbs[0]
  let excl = 0
  let exclNew: number

  for (let i = 1; i < n; i++) {
    exclNew = Math.max(incl, excl)
    incl = excl + numbs[i]
    excl = exclNew
  }

  return Math.max(incl, excl)
}
