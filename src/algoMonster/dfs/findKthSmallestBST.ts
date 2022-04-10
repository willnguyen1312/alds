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

let count = 0;

export function findKthSmallestBSTRecur(
  root: TreeNode,
  k: number
): TreeNode | null {
  if (!root) return null;

  const left = findKthSmallestBSTRecur(root.left, k);

  if (left) return left;

  count++;
  if (count === k) {
    return root;
  }

  return findKthSmallestBSTRecur(root.right, k);
}
