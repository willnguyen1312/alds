/*
This question is asked by Facebook.

Given an array that represents different coin denominations and
an amount of change you need to make, return the fewest number of coins it takes
to make the given amount of change.

Note: If it is not possible to create the amount of change with the coins you’re given, return -1. 

Ex: Given the following denominations and amount…

coins = [1,5, 10, 25], amount = 78, return 6
Take three 25 coins and three 1 coins for a total of 6 coins.
*/

export function makingChange(coins: number[], value: number) {
  const length = coins.length;

  let table = new Array(value + 1);

  for (let i = 1; i < value + 1; i++) {
    table[i] = Number.MAX_VALUE;
  }

  table[0] = 0;

  for (let i = 1; i <= value; i++) {
    for (let j = 0; j < length; j++) {
      if (coins[j] <= i) {
        let subRes = table[i - coins[j]];
        if (subRes !== Number.MAX_VALUE && subRes + 1 < table[i]) {
          table[i] = subRes + 1;
        }
      }
    }
  }

  if (table[value] === Number.MAX_VALUE) return -1;

  return table[value];
}
