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

export function findKthSmallestBSTIter(
  root: TreeNode,
  k: number
): TreeNode | null {
  let count = 0;
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    count++;
    if (count === k) {
      return node;
    }
    node = node.right;
  }

  return null;
}

export function findKthSmallestBSTRecur(root: TreeNode, k: number) {
  let count = 0;

  function findKthSmallestBSTRecurHelper(node: TreeNode): TreeNode | null {
    if (!node) return null;

    const left = findKthSmallestBSTRecurHelper(node.left);
    if (left) return left;

    count++;
    if (count === k) {
      return node;
    }

    return findKthSmallestBSTRecurHelper(node.right);
  }

  return findKthSmallestBSTRecurHelper(root);
}
