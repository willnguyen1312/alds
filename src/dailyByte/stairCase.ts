/*
This question is asked by Google. Given a staircase with N steps and the ability to climb either one or two steps at a time, return the total number of ways to arrive at the top of the staircase. 

Ex: Given the following value of N…

N = 2, return 2
1 step + 1 step
2 steps
Ex: Given the following value of N…

N = 3, return 3
1 step + 1 step + 1 step
1 step + 2 steps
2 steps + 1 step
*/

export function stairCase(n: number): number {
  const res: number[] = [];
  res[0] = 1;
  res[1] = 1;
  res[2] = 2;

  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }

  return res[n];
}
