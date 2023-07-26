class GraphNode {
  val: number
  neighbors: GraphNode[] = []
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

function BFS(node: GraphNode, target: GraphNode) {
  const queue: GraphNode[] = [node]
  let step = 0

  while (queue.length > 0) {
    step += 1

    let length = queue.length

    for (let index = 0; index < length; index++) {
      const element = queue[index]

      if (element.val === target.val) {
        return step
      }

      element.neighbors.forEach((child) => {
        queue.push(child)
      })

      queue.shift()
    }
  }

  return -1
}

function BFSWithCache(node: GraphNode, target: GraphNode) {
  const queue: GraphNode[] = [node]
  let step = 0
  let visitedSet = new Set<GraphNode>([node])

  while (queue.length > 0) {
    step += 1
    let length = queue.length

    for (let index = 0; index < length; index++) {
      const element = queue[index]

      if (element.val === target.val) {
        return step
      }

      element.neighbors.forEach((child) => {
        if (!visitedSet.has(child)) {
          queue.push(child)
        }
      })

      queue.shift()
    }
  }
  return -1
}
