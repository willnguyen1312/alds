/*
Hi, here's your problem today. This problem was recently asked by Apple:

You are given the root of a binary tree, along with two nodes, A and B.
Find and return the lowest common ancestor of A and B. For this problem,
you can assume that each node also has a pointer to its parent, along with its left and right child.
#   a
#  / \
# b   c
#    / \
#   d*  e*
*/

export class BinaryTreeNode {
  val: string;
  left?: BinaryTreeNode;
  right?: BinaryTreeNode;
  parent?: BinaryTreeNode;

  constructor(val: string) {
    this.val = val;
  }
}

export function lowestCommonAncestor(
  root: BinaryTreeNode,
  first: BinaryTreeNode,
  second: BinaryTreeNode
): BinaryTreeNode {
  if (!root) {
    return root;
  }

  if (root.val === first.val || root.val === second.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, first, second);
  const right = lowestCommonAncestor(root.right, first, second);

  if (left && right) {
    return root;
  }

  return left || right;
}

export function lowestCommonAncestor2(
  first: BinaryTreeNode,
  second: BinaryTreeNode
): BinaryTreeNode {
  function getAnother(root: BinaryTreeNode, target: BinaryTreeNode) {
    if (!root) {
      return root;
    }

    if (root.val === target.val) {
      return root;
    }

    const left = getAnother(root.left, target);
    const right = getAnother(root.right, target);

    return left || right;
  }

  let result: BinaryTreeNode = null;

  let parent = first.parent;

  while (parent) {
    if (getAnother(parent, second)) {
      result = parent;
      break;
    }

    parent = parent.parent;
  }

  return result;
}
