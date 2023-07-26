// https://leetcode.com/problems/brick-wall
export function leastBricks(wall: number[][]): number {
  const freq: Map<number, number> = new Map()
  const rows = wall.length
  let maxEdge = 0

  for (let r = 0; r < rows; r++) {
    let edge = 0
    for (let c = 0; c < wall[r].length - 1; c++) {
      edge += wall[r][c]
      const val = (freq.get(edge) || 0) + 1
      freq.set(edge, val)
      maxEdge = Math.max(maxEdge, val)
    }
  }

  return rows - maxEdge
}
