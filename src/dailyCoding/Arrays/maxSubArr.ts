export function maxSubArr(numbs: number[]): number {
  let maxSoFar = Number.NEGATIVE_INFINITY
  let maxEndingHere = Number.NEGATIVE_INFINITY

  for (const numb of numbs) {
    maxEndingHere = Math.max(numb, maxEndingHere + numb)
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }

  return maxSoFar
}
