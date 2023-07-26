export function wordBreak(s: string, words: string[]): boolean {
  const memo: Record<string, boolean> = {}
  return dfs(s, words, 0, memo)
}

function dfs(
  s: string,
  words: string[],
  i: number,
  memo: Record<string, boolean>,
): boolean {
  if (i === s.length) {
    return true
  }

  if (memo[i]) {
    return memo[i]
  }

  let ok = false

  for (const word of words) {
    if (s.slice(i).startsWith(word)) {
      if (dfs(s, words, i + word.length, memo)) {
        ok = true
        break
      }
    }
  }

  memo[i] = ok
  return ok
}
