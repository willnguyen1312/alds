export function depthFirstSearchGraph(node: GraphNode): number[] {
  const result: number[] = [node.val];

  for (const item of node.neighbors || []) {
    depthFirstSearchGraph(item);
  }

  return result;
}
