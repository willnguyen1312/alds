export function window(numbs: number[]): number[] {
  let left: number;
  let right: number;
  let maxSeen = Number.MIN_VALUE;
  let minSeen = Number.MAX_VALUE;

  for (let index = 0; index < numbs.length; index++) {
    const element = numbs[index];
    maxSeen = Math.max(maxSeen, element);

    if (element < maxSeen) {
      right = index;
    }
  }

  for (let index = numbs.length - 1; index >= 0; index--) {
    const element = numbs[index];
    minSeen = Math.min(minSeen, element);

    if (element > minSeen) {
      left = index;
    }
  }

  return [left, right];
}
