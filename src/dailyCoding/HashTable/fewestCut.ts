export function fewestCut(wall: number[][]): number {
  const cutHash: Record<number, number> = {}

  for (const row of wall) {
    let length = 0

    for (let index = 0; index < row.length - 1; index++) {
      const brick = row[index]
      length += brick
      cutHash[length] = (cutHash[length] || 0) + 1
    }
  }

  return wall.length - Math.max(...Object.values(cutHash))
}
