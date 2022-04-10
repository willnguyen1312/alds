export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function bstMinDepthBFS(root: TreeNode): number {
  const queue: TreeNode[] = [root];
  let depth = -1;
  while (queue.length > 0) {
    depth++;
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      for (const child of [node.left, node.right]) {
        if (child) queue.push(child);
      }
    }
  }

  return depth;
}

export function bstMinDepthDFS(root: TreeNode) {
  function dfs(node: TreeNode | undefined) {
    if (!node) {
      return 0;
    }

    return Math.min(dfs(node.left), dfs(node.right)) + 1;
  }

  return Math.min(dfs(root.left), dfs(root.right));
}

export function bstMinDepthDFSIter(root: TreeNode) {
  const stack: TreeNode[] = [root];

  let depth = -1;
  let result = Number.MAX_VALUE;

  while (stack.length) {
    depth++;
    const n = stack.length;

    for (let i = 0; i < n; i++) {
      const node = stack.pop();

      if (!node.left && !node.right) {
        result = Math.min(result, depth);
      }

      for (const child of [node.right, node.left]) {
        if (child) stack.push(child);
      }
    }
  }

  return result;
}
