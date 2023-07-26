function numSquares(n: number): number {
  let dp: number[] = new Array(n + 1)
  for (let i = 1; i <= n; i++) {
    dp[i] = Infinity
  }
  dp[0] = 0
  for (let i = 0; i <= n; i++) {
    for (let j = 1; i + j * j <= n; j++) {
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1)
    }
  }

  return dp[n]
}
