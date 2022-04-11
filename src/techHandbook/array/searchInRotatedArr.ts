// https://leetcode.com/problems/search-in-rotated-sorted-array/
function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] >= nums[low]) {
      if (nums[mid] < target || target < nums[low]) low = mid + 1;
      else high = mid - 1;
    } else {
      if (nums[mid] > target || target > nums[high]) high = mid - 1;
      else low = mid + 1;
    }
  }

  return -1;
}
