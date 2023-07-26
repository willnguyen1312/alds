/*
This question is asked by Apple. You are tasked with painting a row of houses
in your neighborhood such that each house is painted either red, blue, or green.
The cost of painting the ith house red, blue or green, is given by costs[i][0], costs[i][1],
and costs[i][2] respectively. Given that you are required to paint each house and
no two adjacent houses may be the same color, return the minimum cost to paint all the houses. 

Ex: Given the following costs array…

costs = [[1, 3, 5],[2, 4, 6],[5, 4, 3]], return 8.
Paint the first house red, paint the second house blue, and paint the third house green.
*/

export function paintingHouses(costs: number[][]): number {
  costs = costs.sort((a, b) => b[0] - b[1] - b[2] - (a[0] - a[1] - a[2]))
  let result = 0

  for (let i = 0; i < costs.length / 3; i++) {
    result += costs[i][2]
  }

  for (let i = Math.floor(costs.length / 3); i < (costs.length / 3) * 2; i++) {
    result += costs[i][1]
  }

  for (let i = Math.floor((costs.length / 3) * 2); i < costs.length; i++) {
    result += costs[i][0]
  }

  return result
}
