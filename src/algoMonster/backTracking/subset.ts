export function subset(numbs: number[]): number[][] {
  const result: number[][] = []
  const length = numbs.length

  function dfs(index: number, cur: number[]) {
    if (index === length) {
      return
    }

    result.push(cur.concat(numbs[index]))
    dfs(index + 1, cur.concat(numbs[index]))
    dfs(index + 1, cur)
  }

  dfs(0, [])
  return result
}
