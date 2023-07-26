/*
Hi, here's your problem today. This problem was recently asked by Uber:

You have a landscape, in which puddles can form. You are given an array of non-negative integers representing the elevation at each location. Return the amount of water that would accumulate if it rains.

For example: [0,1,0,2,1,0,1,3,2,1,2,1] should return 6 because 6 units of water can get trapped here.
       X               
   X███XX█X              
 X█XX█XXXXXX                   
# [0,1,0,2,1,0,1,3,2,1,2,1]
*/

export function waterTrap(heights: number[]) {
  const maxes = new Array(heights.length).fill(0)

  let leftMax = 0
  for (let i = 0; i < heights.length; i++) {
    maxes[i] = leftMax
    const height = heights[i]
    leftMax = Math.max(leftMax, height)
  }

  let rightMax = 0
  for (let i = heights.length - 1; i >= 0; i--) {
    const height = heights[i]
    const minHeight = Math.min(rightMax, maxes[i])
    if (height < minHeight) {
      maxes[i] = minHeight - height
    } else {
      maxes[i] = 0
    }
    rightMax = Math.max(rightMax, height)
  }

  return maxes.reduce((a, b) => a + b, 0)
}
