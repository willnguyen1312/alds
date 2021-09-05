/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a number n, find the least number of squares needed to sum up to the number.
*/

export function sumOfSquares(numb: number): number {
  const table = new Array(numb);
  table.fill(0);
  table[0] = 1;

  for (let i = 0; i < numb; i++) {
    const hasSquare = Math.pow(Math.sqrt(i), 2) === i;

    if (hasSquare) {
      table[i] = 1;
    } else {
      table[i] = table[i - 1] + table[i - (i - 1)];
    }
  }

  return table[table.length - 1];
}
