/*
This question is asked by Google.

A company is booking flights to send its employees to its two satellite offices A and B.
The cost of sending the ith employee to office A and office B is given by prices[i][0]
and prices[i][1] respectively. Given that half the employees must be
sent to office A and half the employees must be sent to office B,
return the minimum cost the company must pay for all their employees’ flights.

Ex: Give the following prices…

prices = [[40,30],[300,200],[50,50],[30,60]], return 310
Fly the first personn to office B.
Fly the second person to office B.
Fly the third person to office A.
Fly the fourth person to office A.
*/

export function flightPrices(costs: number[][]): number {
  costs = costs.sort((a, b) => b[0] - b[1] - (a[0] - a[1]))
  let result = 0

  for (let i = 0; i < costs.length / 2; i++) {
    result += costs[i][1]
  }

  for (let i = costs.length / 2; i < costs.length; i++) {
    result += costs[i][0]
  }

  return result
}
