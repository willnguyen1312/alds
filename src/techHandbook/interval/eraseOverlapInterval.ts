// https://leetcode.com/problems/non-overlapping-intervals/
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length < 2) {
    return 0;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let res = 0;
  let prevIndex = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[prevIndex][1]) {
      if (intervals[prevIndex][1] >= intervals[i][1]) {
        prevIndex = i;
      }
      res += 1;
    } else {
      prevIndex = i;
    }
  }

  return res;
}
