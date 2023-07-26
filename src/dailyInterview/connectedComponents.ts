/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a list of undirected edges which represents a graph,
find out the number of connected components.
*/

export function connectedComponents(connections: number[][]): number {
  let result = 0
  const adj: Record<number, number[]> = {}
  const visited: Record<number, boolean> = {}

  for (const connection of connections) {
    const [start, end] = connection
    adj[start] = adj[start] || []
    adj[end] = adj[end] || []

    adj[start].push(end)
    adj[end].push(start)
  }

  for (let index = 0; index < connections.length; index++) {
    const [start] = connections[index]

    if (!visited[start]) {
      result++
      dfs(start)
    }
  }

  function dfs(connectionNode: number) {
    if (visited[connectionNode]) {
      return
    }

    visited[connectionNode] = true
    for (let i = 0; i < adj[connectionNode].length; i++) {
      dfs(adj[connectionNode][i])
    }
  }

  return result
}
