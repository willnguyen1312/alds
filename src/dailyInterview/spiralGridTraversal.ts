/*
Hi, here's your problem today. This problem was recently asked by Amazon:

You are given a 2D array of integers. Print out the clockwise spiral traversal of the matrix.

Example:

grid = [[1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]]

The clockwise spiral traversal of this array is:

1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
*/

export function spiralGridTraversal(arr: number[][]) {
  const result: number[] = []

  // k - starting row index
  let k = 0
  //   l - starting column index
  let l = 0
  // m - ending row index
  let m = arr.length
  //   n - ending column index
  let n = arr[0].length

  while (k < m && l < n) {
    // print the first row from the remaining rows
    for (let i = l; i < n; ++i) {
      result.push(arr[k][i])
    }
    k++

    // print the last column from the remaining columns
    for (let i = k; i < m; ++i) {
      result.push(arr[i][n - 1])
    }
    n--

    // print the last row from the remaining rows
    if (k < m) {
      for (let i = n - 1; i >= l; --i) {
        result.push(arr[m - 1][i])
      }
      m--
    }

    // print the first column from the remaining columns
    if (l < n) {
      for (let i = m - 1; i >= k; --i) {
        result.push(arr[i][l])
      }
      l++
    }
  }

  return result
}
