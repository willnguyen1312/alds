export function nodeDepthsRecur(root: TreeNode | null, depth = 0): number {
  if (!root) {
    return 0;
  }

  return depth + nodeDepthsRecur(root.left, depth + 1) + nodeDepthsRecur(root.right, depth + 1);
}

export function nodeDepths(root: TreeNode) {
  let result = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const item = stack.pop();

    if (item) {
      const { node, depth } = item;
      result += depth + 1;

      node.left && stack.push({ node: node.left, depth: depth + 1 });
      node.right && stack.push({ node: node.right, depth: depth + 1 });
    }
  }

  return result;
}
