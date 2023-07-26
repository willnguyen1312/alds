/*
Hi, here's your problem today. This problem was recently asked by Apple:

You are given a binary tree representation of an arithmetic expression.
In this tree, each leaf is an integer value,, and a non-leaf node is one of
the four operations: '+', '-', '*', or '/'.

Write a function that takes this tree and evaluates the expression.

Example:

    *
   / \
  +    +
 / \  / \
3  2  4  5

This is a representation of the expression (3 + 2) * (4 + 5), and should return 45.
*/

export const enum Action {
  DIVIDE = "/",
  MINUS = "-",
  PLUS = "+",
  TIMES = "*",
}

export class BinaryTreeNode {
  val: number | string
  left?: BinaryTreeNode
  right?: BinaryTreeNode

  constructor(val: number | string) {
    this.val = val
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
  }

  const handle = handlers[root.val]

  return handle ? handle(root.left, root.right) : root.val
}
