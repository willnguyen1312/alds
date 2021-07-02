export function heightChecker(heights: number[]): number {
  const sortedHeights = heights.slice().sort((a, b) => a - b);

  let result = 0;

  for (let index = 0; index < heights.length; index++) {
    if (heights[index] !== sortedHeights[index]) {
      result++;
    }
  }

  return result;
}
