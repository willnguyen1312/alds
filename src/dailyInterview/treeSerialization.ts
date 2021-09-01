/*
Hi, here's your problem today. This problem was recently asked by Apple:

You are given the root of a binary tree. You need to implement 2 functions:

1. serialize(root) which serializes the tree into a string representation
2. deserialize(s) which deserializes the string back to the original tree that it represents

For this problem, often you will be asked to design your own serialization format.

#     1
#    / \
#   3   4
#  / \   \
# 2   5   7
*/

export class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(val: number) {
    this.val = val;
  }
}

export function treeSerialization(root: BinaryTreeNode): string {
  const data = [];

  const queue: BinaryTreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      data.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      data.push(null);
    }
  }

  while (data.length > 0 && data[data.length - 1] === null) {
    data.pop();
  }

  return JSON.stringify(data);
}

export function treeDeserialization(data: any): BinaryTreeNode {
  data = JSON.parse(data);

  const root = new BinaryTreeNode(data.shift());
  const queue = [root];

  while (data.length > 0) {
    const node = queue.shift();

    let val = data.shift();
    if (val) {
      node.left = new BinaryTreeNode(val);
      queue.push(node.left);
    }

    val = data.shift();
    if (val) {
      node.right = new BinaryTreeNode(val);
      queue.push(node.right);
    }
  }

  return root;
}
