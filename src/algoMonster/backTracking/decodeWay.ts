const LETTERS = Array.from({ length: 26 }, (_, index) => `${index + 1}`)

export function decodeWay(digits: string): number {
  const memo: Record<number, number> = {}
  return dfs(digits, 0, memo)
}

function dfs(digits: string, i: number, memo: Record<number, number>): number {
  if (memo[i]) return memo[i]

  if (i === digits.length) return 1

  let ways = 0

  const remaining = digits.slice(i)
  for (const letter of LETTERS) {
    if (remaining.startsWith(letter)) {
      ways += dfs(digits, i + letter.length, memo)
    }
  }

  memo[i] = ways
  return ways
}
