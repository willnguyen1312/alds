/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a node in a connected directional graph, create a copy of it.
*/

export class GraphNode {
  constructor(
    public val: any,
    public neighbors = [],
  ) {}
}

export function cloneGraph(node: GraphNode, copy = new Map()) {
  if (!node) return null

  if (!copy.has(node.val)) {
    copy.set(node.val, new GraphNode(node.val))
    copy.get(node.val).neighbors = node.neighbors.map((neighbor) =>
      cloneGraph(neighbor, copy),
    )
  }

  return copy.get(node.val)
}
