function DFS(node: GraphNode, target: GraphNode) {
  const visited = new Set<GraphNode>();
  const stack: GraphNode[] = [];
  stack.push(node);
  while (stack.length > 1) {
    const cur = stack.pop() as GraphNode;

    if (cur.value === target.value) {
      return true;
    }
    for (const item of cur.children) {
      if (!visited.has(item)) {
        visited.add(item);
        stack.push(item);
      }
    }
  }
  return false;
}

function DFSRecur(
  cur: GraphNode,
  target: GraphNode,
  visited: Set<GraphNode> = new Set<GraphNode>()
) {
  if (cur.value === target.value) {
    return true;
  }

  for (const node of cur.children) {
    if (!visited.has(node)) {
      visited.add(node);
      if (DFSRecur(node, target, visited)) {
        return true;
      }
    }
  }
  return false;
}
