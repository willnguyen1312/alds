// https://leetcode.com/problems/two-sum/
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const remainder = target - element;

    if (map.has(remainder)) {
      return [map.get(remainder), index];
    }

    map.set(element, index);
  }

  return [-1, -1];
}
