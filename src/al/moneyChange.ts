export function moneyChange(coins: number[], target: number): number {
  if (target === 0) {
    return 0;
  }

  let result = Number.MAX_VALUE;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= target) {
      let subResult = moneyChange(coins, target - coins[i]);

      if (subResult !== Number.MAX_VALUE && subResult + 1 < result)
        result = subResult + 1;
    }
  }

  return result;
}

export function moneyChange2(coins: number[], target: number): number {
  const table = new Array(target + 1);

  for (let i = 0; i < table.length; i++) {
    table[i] = 0;
  }

  for (let i = 1; i <= target; i++) {
    table[i] = Number.MAX_VALUE;
  }

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < coins.length; j++)
      if (coins[j] <= i) {
        const subResult = table[i - coins[j]];
        if (subResult !== Number.MAX_VALUE && subResult + 1 < table[i]) {
          table[i] = subResult + 1;
        }
      }
  }

  if (table[target] === Number.MAX_VALUE) return -1;

  return table[target];
}
