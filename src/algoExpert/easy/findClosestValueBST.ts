export function findClosestValueBstRecur(node: TreeNode, target: number) {
  return findClosestValueBstRecurHelper(node, target);
}

function findClosestValueBstRecurHelper(
  node: TreeNode,
  target: number,
  closest = Infinity
): any {
  if (!node) {
    return closest;
  }

  if (node.val === target) {
    return node;
  }

  if (Math.abs(node.val - target) < Math.abs(closest - target)) {
    closest = node.val;
  }

  if (node.val > target) {
    return findClosestValueBstRecurHelper(
      node.left as TreeNode,
      target,
      closest
    );
  }

  return findClosestValueBstRecurHelper(
    node.right as TreeNode,
    target,
    closest
  );
}

export function findClosestValueBstHelper(
  node: TreeNode,
  target: number,
  closest = Infinity
): any {
  let currentNode: any = node;

  while (currentNode) {
    if (currentNode.val === target) {
      return node;
    }

    if (Math.abs(node.val - target) < Math.abs(closest - target)) {
      closest = node.val;
    }

    if (node.val > target) {
      currentNode = node.left;
    } else {
      currentNode = node.right;
    }
  }

  return closest;
}
