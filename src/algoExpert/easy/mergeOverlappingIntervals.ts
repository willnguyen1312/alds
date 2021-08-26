/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

You are given an array of intervals - that is, an array of tuples (start, end).
The array may not be sorted, and could contain overlapping intervals.
Return another array where the overlapping intervals are merged.

For example:
[(1, 3), (5, 8), (4, 10), (20, 25)]

This input should return [(1, 3), (4, 10), (20, 25)] since (5, 8) and (4, 10) can be merged into (4, 10).
*/

export function mergeOverlappingIntervals(input: number[][]): number[][] {
  const sortedInput = input.slice().sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  let current: number[] = sortedInput[0];

  for (let index = 1; index < sortedInput.length; index++) {
    const element = sortedInput[index];

    const canMerge = current[1] >= element[0];
    if (canMerge) {
      current[1] = Math.max(current[1], element[1]);
    } else {
      result.push(current);
      current = element;
    }
  }

  result.push(current);
  return result;
}
