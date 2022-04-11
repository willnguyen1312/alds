// https://leetcode.com/problems/merge-intervals/
function mergeInterval(intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [];
  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const element = intervals[i];
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
