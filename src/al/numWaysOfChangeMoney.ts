export function numWaysOfChangeMoney(coins: number[], target: number): number {
  const table = Array(target + 1).fill(0)

  table[0] = 1

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < table.length; j++) {
      table[j] += table[j - coins[i]]
    }
  }

  return table[target]
}
