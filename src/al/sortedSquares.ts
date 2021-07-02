export function sortedSquares(nums: number[]): number[] {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  const result = new Array(n);

  for (let index = n - 1; index >= 0; index--) {
    if (Math.abs(nums[left]) > nums[right]) {
      result[index] = nums[left] * nums[left];
      left++;
    } else {
      result[index] = nums[right] * nums[right];
      right--;
    }
  }

  return result;
}
