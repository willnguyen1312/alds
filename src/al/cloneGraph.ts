// SOLUTION 1 Using DFS
const cloneGraph = (graph: GraphNode) => {
  if (!graph) return graph;

  return dfs(graph, new Map<number, GraphNode>());
};

const dfs = (graph: GraphNode, visited: Map<number, GraphNode>) => {
  if (visited.has(graph.val)) return visited.get(graph.val);

  const newNode = new GraphNode(graph.val);
  visited.set(newNode.val, newNode);

  for (let i = 0; i < graph.neighbors.length; i++) {
    const neighbor = dfs(graph.neighbors[i], visited) as GraphNode;
    newNode.neighbors.push(neighbor);
  }

  return newNode;
};

// SOLUTION 2 Using DFS
const cloneGraphBFS = function (graph: GraphNode) {
  if (graph === null) return graph;

  let visitedMap = new Map<number, GraphNode>();
  let queue = [graph];
  let copyReturn = new GraphNode(graph.val);
  visitedMap.set(copyReturn.val, copyReturn);

  while (queue.length > 0) {
    let node = queue.shift() as GraphNode;
    let nodeCopied = visitedMap.get(node.val) as GraphNode;

    for (let i = 0; i < node.neighbors.length; i++) {
      let neighbor = node.neighbors[i];

      if (!visitedMap.has(neighbor.val)) {
        let copyNeighbor = new GraphNode(neighbor.val);
        visitedMap.set(neighbor.val, copyNeighbor);
        queue.push(neighbor);
      }

      nodeCopied.neighbors.push(visitedMap.get(neighbor.val) as GraphNode);
    }
  }

  return copyReturn;
};
