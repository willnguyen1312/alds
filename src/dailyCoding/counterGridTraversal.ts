export function counterGridTraversal(arr: number[][]): number[] {
  const result: number[] = []
  let endRow = arr.length
  let endColumn = arr[0].length
  let startRow = 0
  let startColumn = 0

  while (startRow < endRow && startColumn < endColumn) {
    for (let i = startRow; i < endRow; i++) {
      result.push(arr[i][startColumn])
    }
    startColumn++

    for (let i = startColumn; i < endColumn; i++) {
      result.push(arr[endRow - 1][i])
    }
    endRow--

    if (startRow < endRow) {
      for (let i = endRow - 1; i >= startRow; i--) {
        result.push(arr[i][endColumn - 1])
      }
      endColumn--
    }

    if (startColumn < endColumn) {
      for (let i = endColumn - 1; i >= startColumn; i--) {
        result.push(arr[startRow][i])
      }
      startRow++
    }
  }

  return result
}
