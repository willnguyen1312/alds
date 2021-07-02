export function thirdMax(nums: number[]): number {
  let max = null;
  let second = null;
  let third = null;

  for (const num of nums) {
    if (num === max || num === second || num === third) {
      continue;
    }

    if (!max || num > max) {
      third = second;
      second = max;
      max = num;
    } else if (!second || num > second) {
      third = second;
      second = num;
    } else if (!third || num > third) {
      third = num;
    }
  }

  if (!third && typeof third !== 'number') return max as number;

  return third as number;
}
