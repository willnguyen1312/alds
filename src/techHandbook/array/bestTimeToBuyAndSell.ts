// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) {
    return 0
  }

  let left = 0
  let right = left + 1
  let result = 0

  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right
      right = left + 1
    } else {
      result = Math.max(result, prices[right] - prices[left])
      right++
    }
  }

  return result
}
