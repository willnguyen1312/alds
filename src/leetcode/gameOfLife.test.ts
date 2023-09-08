const makeDirections = () => {
  const dirs = []
  const moves = [0, 1, -1]
  for (const d1 of moves) {
    for (const d2 of moves) {
      dirs.push([d1, d2])
    }
  }

  dirs.shift()
  return dirs
}

const iterateBoard = (
  f: (x: number, y: number, board: number[][]) => void,
  board: number[][],
) => {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      f(x, y, board)
    }
  }
}

const MAX_NEEDED_NEIGHBORS = 3

function gameOfLife(board: number[][]): void {
  const directions = makeDirections()
  const n = board.length
  const m = board[0].length

  const checkNeighbors = (x: number, y: number, board: number[][]) => {
    let count = 0

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy

      const inValid = nx < 0 || ny < 0 || nx >= n || ny >= m
      if (inValid) continue

      const isLiveCell = Math.abs(board[nx][ny]) === 1
      if (isLiveCell) count++
      if (count > MAX_NEEDED_NEIGHBORS) break
    }

    return count
  }

  const checkLiveCell = (x: number, y: number, board: number[][]) => {
    const neighbors = checkNeighbors(x, y, board)
    const underPopulation = neighbors <= 1
    const overPopulation = neighbors > 3
    if (underPopulation || overPopulation) board[x][y] = -1
  }

  const checkDeadCell = (x: number, y: number, board: number[][]) => {
    const neighbors = checkNeighbors(x, y, board)
    const reproduction = neighbors === 3
    if (reproduction) board[x][y] = 2
  }

  const checkCell = (x: number, y: number, board: number[][]) => {
    if (board[x][y]) checkLiveCell(x, y, board)
    else checkDeadCell(x, y, board)
  }

  const formatBoard = (x: number, y: number, board: number[][]) => {
    if (board[x][y] === 2) board[x][y] = 1
    else if (board[x][y] === -1) board[x][y] = 0
  }

  const nextState = () => {
    iterateBoard(checkCell, board)
    iterateBoard(formatBoard, board)
  }

  nextState()
}

function gameOfLife2(board: number[][]): number[][] {
  const directions = makeDirections()
  const n = board.length
  const m = board[0].length

  const result = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => -1),
  )

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      let count = 0

      for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        const inValid = nx < 0 || ny < 0 || nx >= n || ny >= m
        if (inValid) continue

        const isLiveCell = board[nx][ny] === 1
        if (isLiveCell) count++
        if (count > MAX_NEEDED_NEIGHBORS) break
      }

      if (board[x][y]) {
        const underPopulation = count <= 1
        const overPopulation = count > 3
        if (underPopulation || overPopulation) result[x][y] = 0
        else result[x][y] = 1
      } else {
        const reproduction = count === 3
        if (reproduction) result[x][y] = 1
        else result[x][y] = 0
      }
    }
  }

  return result
}

describe("game of life", () => {
  it("should work once", () => {
    const board = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ]
    gameOfLife(board)
    expect(board).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ])
  })

  it("should work twice", () => {
    const board = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ]
    const output = gameOfLife2(board)
    expect(output).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ])
  })
})
