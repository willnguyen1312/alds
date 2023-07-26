export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const result: number[][] = []

  function dfs(
    numbs: number[],
    start: number,
    remaining: number,
    path: number[],
  ) {
    if (remaining === 0) {
      result.push(path.slice())
      return
    }

    for (let index = start; index < numbs.length; index++) {
      const numb = numbs[index]

      if (remaining - numb < 0) {
        continue
      }

      dfs(numbs, index, remaining - numb, path.concat(numb))
    }
  }

  dfs(candidates, 0, target, [])
  return result
}
