export function maxSubArr(numbs: number[]): number {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (const numb of numbs) {
    maxEndingHere = Math.max(numb, maxEndingHere + numb);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
