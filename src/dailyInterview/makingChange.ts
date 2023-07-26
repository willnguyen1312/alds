/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a list of possible coins in cents, and an amount (in cents) n,
return the minimum number of coins needed to create the amount n.
If it is not possible to create the amount using the given coin denomination, return None.
*/

export function makingChange(coins: number[], value: number) {
  const length = coins.length

  let table = new Array(value + 1)

  for (let i = 0; i < value + 1; i++) {
    table[i] = 0
  }

  for (let i = 1; i < value + 1; i++) {
    table[i] = Number.MAX_VALUE
  }

  for (let i = 1; i <= value; i++) {
    for (let j = 0; j < length; j++) {
      if (coins[j] <= i) {
        let subRes = table[i - coins[j]]
        if (subRes !== Number.MAX_VALUE && subRes + 1 < table[i]) {
          table[i] = subRes + 1
        }
      }
    }
  }

  if (table[value] === Number.MAX_VALUE) return -1

  return table[value]
}
