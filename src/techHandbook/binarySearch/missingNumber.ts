// https://leetcode.com/problems/missing-number
export function missingNumber(nums: number[]): boolean | number {
  const set = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return false;
}
