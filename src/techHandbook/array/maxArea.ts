// https://leetcode.com/problems/container-with-most-water/
function maxArea(heights: number[]): number {
  let left = 0
  let right = heights.length - 1
  let max_area = 0
  let area = 0
  while (left < right) {
    const min = heights[left] < heights[right] ? left : right
    area = heights[min] * Math.abs(left - right)

    max_area = Math.max(max_area, area)

    if (min == left) {
      left++
    } else {
      right--
    }
  }
  return max_area
}
