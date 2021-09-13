/*
This problem was asked by Microsoft.

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

    *
   / \
  +    +
 / \  / \
3  2  4  5
You should return 45, as it is (3 + 2) * (4 + 5).
*/

export const enum Action {
  DIVIDE = '/',
  MINUS = '-',
  PLUS = '+',
  TIMES = '*',
}

export class BinaryTreeNode {
  val: number | string;
  left?: BinaryTreeNode;
  right?: BinaryTreeNode;

  constructor(val: number | string) {
    this.val = val;
  }
}

export function arithmeticBinaryTree(root: BinaryTreeNode): number {
  const handlers = {
    [Action.TIMES]: (first: BinaryTreeNode, second: BinaryTreeNode) =>
      arithmeticBinaryTree(first) * arithmeticBinaryTree(second),
    [Action.DIVIDE]: (first: BinaryTreeNode, second: BinaryTreeNode) =>
      arithmeticBinaryTree(first) / arithmeticBinaryTree(second),
    [Action.PLUS]: (first: BinaryTreeNode, second: BinaryTreeNode) =>
      arithmeticBinaryTree(first) + arithmeticBinaryTree(second),
    [Action.MINUS]: (first: BinaryTreeNode, second: BinaryTreeNode) =>
      arithmeticBinaryTree(first) - arithmeticBinaryTree(second),
  };

  const handle = handlers[root.val];

  return handle ? handle(root.left, root.right) : root.val;
}
