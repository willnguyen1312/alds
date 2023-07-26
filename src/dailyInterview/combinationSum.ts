export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const res: number[][] = []

  function dfs(
    arr: number[],
    index: number,
    target: number,
    list: number[] = [],
  ) {
    if (target < 0 || index >= arr.length) {
      return
    }

    if (target === 0) {
      res.push(list.slice())
      return
    }

    for (let i = index; i < arr.length; i++) {
      if (target >= arr[i]) {
        list.push(arr[i])
        dfs(arr, i, target - arr[i], list)
        list.pop()
      }
    }
  }
  dfs(candidates, 0, target)

  return res
}
