/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a number n, generate all possible combinations of n well-formed brackets.
*/

export function generateParenthesis(n: number): string[] {
  const res: string[] = []

  function dfs(str: string, left: number, right: number, n: number) {
    if (str.length === 2 * n) {
      res.push(str)
    }

    if (left < n) {
      dfs(str + "(", left + 1, right, n)
    }

    if (right < left) {
      dfs(str + ")", left, right + 1, n)
    }
  }

  dfs("", 0, 0, n)

  return res
}
