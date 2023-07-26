export function countWaysOfMakingChange(coins: number[], n: number): number {
  const length = coins.length
  let table = new Array(n + 1)
  table.fill(0)

  table[0] = 1

  for (let i = 0; i < length; i++) {
    for (let j = coins[i]; j < n + 1; j++) {
      table[j] += table[j - coins[i]]
    }
  }

  return table[n]
}
