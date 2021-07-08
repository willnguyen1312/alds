export function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] <= n) {
      const pos = nums[i] - 1;
      if (nums[pos] !== nums[i]) {
        [nums[pos], nums[i]] = [nums[i], nums[pos]];
        i--;
      }
    }
  }
  for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1;
  return n + 1;
}

// Input: nums = [1,2,0]
// Output: 3

// Input: nums = [3,4,-1,1]
// Output: 2

// Input: nums = [7,8,9,11,12]
// Output: 1
