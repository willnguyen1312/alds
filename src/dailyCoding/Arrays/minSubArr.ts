export function minSubArr(numbs: number[]): number {
  let minSoFar = 0;
  let minEndingHere = 0;

  for (const numb of numbs) {
    minEndingHere = Math.min(numb, minEndingHere + numb);
    minSoFar = Math.min(minSoFar, minEndingHere);
  }

  return minSoFar;
}
