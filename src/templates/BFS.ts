interface GraphNode {
  value: number;
  children: GraphNode[];
}

function BFS(node: GraphNode, target: GraphNode) {
  const queue: GraphNode[] = [node];
  let step = 0;

  while (queue.length > 0) {
    step += 1;

    let length = queue.length;

    for (let index = 0; index < length; index++) {
      const element = queue[index];

      if (element.value === target.value) {
        return step;
      }

      element.children.forEach((child) => {
        queue.push(child);
      });

      queue.shift();
    }
  }

  return -1;
}

function BFSWithCache(node: GraphNode, target: GraphNode) {
  const queue: GraphNode[] = [node];
  let step = 0;
  let visitedSet = new Set<GraphNode>([node]);

  while (queue.length > 0) {
    step += 1;
    let length = queue.length;

    for (let index = 0; index < length; index++) {
      const element = queue[index];

      if (element.value === target.value) {
        return step;
      }

      element.children.forEach((child) => {
        if (!visitedSet.has(child)) {
          queue.push(child);
        }
      });

      queue.shift();
    }
  }
  return -1;
}
