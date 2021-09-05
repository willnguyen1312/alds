/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a 2d n x m matrix where each cell has a certain amount of change on the floor,
your goal is to start from the top left corner mat[0][0] and end in the bottom right corner
mat[n - 1][m - 1] with the most amount of change. You can only move either right or down.

def max_change(mat):
  # Fill this in.

mat = [
    [0, 3, 0, 2],
    [1, 2, 3, 3],
    [6, 0, 3, 2]
]

print(max_change(mat))
# 13
*/

export function pickUpChange(input: number[][]): number {
  function pickUpChangeUtil(arr: number[][], row: number, col: number) {
    if (row >= arr.length || col >= arr[0].length) {
      return 0;
    }

    const maxGoRight = arr[row][col] + pickUpChangeUtil(arr, row, col + 1);
    const maxGoDown = arr[row][col] + pickUpChangeUtil(arr, row + 1, col);

    return Math.max(maxGoRight, maxGoDown);
  }

  return pickUpChangeUtil(input, 0, 0);
}
