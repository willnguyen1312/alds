export function moveZeros(numbs: number[]): number[] {
  let slow = 0;

  for (let fast = 0; fast < numbs.length; fast++) {
    if (numbs[fast] !== 0) {
      [numbs[slow], numbs[fast]] = [numbs[fast], numbs[slow]];
      slow++;
    }
  }

  return numbs;
}
