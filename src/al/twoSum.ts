export function twoSum(nums: number[], target: number): number[] {
  const lookupNumb: Record<number, number> = {};
  const result: number[] = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const remainder = target - element;

    if (typeof lookupNumb[remainder] === 'number') {
      result[0] = lookupNumb[remainder];
      result[1] = index;
    }

    if (!lookupNumb[element]) {
      lookupNumb[element] = index;
    }
  }

  return result;
}
