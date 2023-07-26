class Element {
  constructor(
    public x: number,
    public y: number,
    public dist: number,
  ) {}
}

function checkValid(
  board: boolean[][],
  row: number,
  col: number,
  visited: boolean[][],
  currentRow: number,
  currentCol: number,
) {
  return (
    currentRow >= 0 &&
    currentRow < row &&
    currentCol >= 0 &&
    currentCol < col &&
    !board[currentRow][currentCol] &&
    !visited[currentRow][currentCol]
  )
}

export function minStepsFromStartToEnd(
  board: boolean[][],
  srcX: number,
  srcY: number,
  destX: number,
  destY: number,
): number {
  const row = board.length
  const col = board[0].length

  const visited: boolean[][] = Array.from({ length: row }, () =>
    new Array(col).fill(false),
  )

  const queue: Element[] = []
  queue.push(new Element(srcX, srcY, 0))

  while (queue.length) {
    const currentElement = queue.shift()

    visited[currentElement.x][currentElement.y] = true

    if (currentElement.x === destX && currentElement.y === destY) {
      return currentElement.dist
    }

    if (
      checkValid(
        board,
        row,
        col,
        visited,
        currentElement.x + 1,
        currentElement.y,
      )
    ) {
      queue.push(
        new Element(
          currentElement.x + 1,
          currentElement.y,
          currentElement.dist + 1,
        ),
      )
    }

    if (
      checkValid(
        board,
        row,
        col,
        visited,
        currentElement.x - 1,
        currentElement.y,
      )
    ) {
      queue.push(
        new Element(
          currentElement.x - 1,
          currentElement.y,
          currentElement.dist + 1,
        ),
      )
    }

    if (
      checkValid(
        board,
        row,
        col,
        visited,
        currentElement.x,
        currentElement.y + 1,
      )
    ) {
      queue.push(
        new Element(
          currentElement.x,
          currentElement.y + 1,
          currentElement.dist + 1,
        ),
      )
    }

    if (
      checkValid(
        board,
        row,
        col,
        visited,
        currentElement.x,
        currentElement.y - 1,
      )
    ) {
      queue.push(
        new Element(
          currentElement.x,
          currentElement.y - 1,
          currentElement.dist + 1,
        ),
      )
    }
  }

  return -1
}
