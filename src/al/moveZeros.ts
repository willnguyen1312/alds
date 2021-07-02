export function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
    i++;
  }
}
