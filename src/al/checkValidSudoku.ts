export type SudokuCellType = number | string

export function checkValidSudoku(board: SudokuCellType[][]) {
  const rows: SudokuCellType[][] = []
  const columns: SudokuCellType[][] = []
  const boxes: SudokuCellType[][] = []

  for (let i = 0; i < 9; i++) {
    rows.push([])
    columns.push([])
    boxes.push([])
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let cell = board[i][j]

      if (cell !== ".") {
        if (rows[i].includes(cell)) {
          return false
        } else rows[i].push(cell)

        if (columns[j].includes(cell)) {
          return false
        } else columns[j].push(cell)

        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

        if (boxes[boxIndex].includes(cell)) {
          return false
        } else boxes[boxIndex].push(cell)
      }
    }
  }

  return true
}
