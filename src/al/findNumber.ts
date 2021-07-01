export function findNumbers(nums: number[]): number {
  return nums.reduce((acc, cur) => {
    if (cur.toString().length % 2 === 0) {
      acc += 1;
    }
    return acc;
  }, 0);
}
