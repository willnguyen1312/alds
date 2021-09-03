/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given the root of a binary tree, print its level-order traversal. For example:

  1
 / \
2   3
   / \
  4   5

The following tree should output 1, 2, 3, 4, 5.
*/

export class BinaryTreeNode {
  val: number;
  left?: BinaryTreeNode | null;
  right?: BinaryTreeNode | null;

  constructor(val: number, left?: BinaryTreeNode, right?: BinaryTreeNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function levelOrderTraversalBST(root: BinaryTreeNode): number[] {
  const result: number[] = [];
  const queue: BinaryTreeNode[] = [root];

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = [];

    while (queue.length) {
      const node = queue.shift();
      result.push(node.val);
      if (node.left) {
        toQueue.push(node.left);
      }

      if (node.right) {
        toQueue.push(node.right);
      }
    }

    queue.push(...toQueue);
  }

  return result;
}
