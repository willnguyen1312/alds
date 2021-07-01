export function findMaxConsecutiveOnes(nums: number[]): number {
  let result = 0;
  let current = 0;
  for (const number of nums) {
    if (number === 1) {
      current += 1;
    } else {
      result = current > result ? current : result;
      current = 0;
    }
  }

  result = current > result ? current : result;

  return result;
}
