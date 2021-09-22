/*
This problem was asked by Google.

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

    a
   / \
  b   c
 /
d
*/

export class BinaryTreeNode {
  constructor(
    public data: string,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function getDeepestNode(root: BinaryTreeNode): BinaryTreeNode {
  let queue: BinaryTreeNode[] = [root];
  let result: BinaryTreeNode;

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = [];

    for (const node of queue) {
      result = node;
      if (node.left) {
        toQueue.push(node.left);
      }

      if (node.right) {
        toQueue.push(node.right);
      }
    }

    queue = toQueue;
  }

  return result;
}
