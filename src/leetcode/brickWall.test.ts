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


describe('leastBricks function', () => {
  it('should work', () => {
    const actual = leastBricks([
      [1, 2, 2, 1],
      [3, 1, 2],
      [1, 3, 2],
      [2, 4],
      [3, 1, 2],
      [1, 3, 1, 1],
    ])
    expect(actual).toBe(2)
  })
})