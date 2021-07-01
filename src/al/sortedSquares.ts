export function sortedSquares(nums: number[]): number[] {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
}
