/*
Hi, here's your problem today. This problem was recently asked by Apple:

You are given an array. Each element represents the price of a stock on that particular day.
Calculate and return the maximum profit you can make from buying and selling that stock only once.

For example: [9, 11, 8, 5, 7, 10]

Here, the optimal trade is to buy when the price is 5, and sell when it is 10,
so the return value should be 5 (profit = 10 - 5 = 5).
*/

export function maximumProfitFromStocks(values: number[]): number {
  let result = 0
  let currentMin = values[0]
  let currentMax = values[0]

  for (let index = 1; index < values.length; index++) {
    const value = values[index]
    const prevValue = values[index - 1]

    currentMax = Math.max(currentMax, value)
    const diff = currentMax - currentMin
    result = Math.max(result, diff)

    if (value < prevValue) {
      currentMax = value
    }

    currentMin = Math.min(currentMin, value)
  }

  return result
}
