function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  const startingColor = image[sr][sc]
  image[sr][sc] = newColor
  const DIR = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  const helper = (sr: number, sc: number) => {
    for (let d of DIR) {
      const row = sr + d[0]
      const col = sc + d[1]
      if (
        row >= 0 &&
        row < image.length &&
        col >= 0 &&
        col < image[row].length &&
        image[row][col] === startingColor &&
        image[row][col] !== newColor
      ) {
        image[row][col] = newColor
        helper(row, col)
      }
    }
  }

  helper(sr, sc)
  return image
}
