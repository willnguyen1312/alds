function riverSizes(matrix: number[][]) {
  const sizes: number[] = []
  const visited = matrix.map((row) => row.map(() => false))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue
      traverseNode(i, j, matrix, visited, sizes)
    }
  }
  return sizes
}

function traverseNode(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][],
  sizes: number[],
) {
  let currentRiverSize = 0
  const nodesToExplore = [[i, j]]

  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop() as number[]
    i = currentNode[0]
    j = currentNode[1]

    if (visited[i][j]) continue
    visited[i][j] = true

    if (matrix[i][j] === 0) continue
    currentRiverSize++

    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
    nodesToExplore.push(...unvisitedNeighbors)
  }

  if (currentRiverSize > 0) sizes.push(currentRiverSize)
}

function getUnvisitedNeighbors(
  i: number,
  j: number,
  matrix: number[][],
  visited: boolean[][],
) {
  const unvisitedNeighbors = []
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j])
  if (i < matrix.length - 1 && !visited[i + 1][j])
    unvisitedNeighbors.push([i + 1, j])

  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1])
  if (j < matrix[0].length - 1 && !visited[i][j + 1])
    unvisitedNeighbors.push([i, j + 1])

  return unvisitedNeighbors
}
