/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

A k-ary tree is a tree with k-children, and a tree is symmetrical if the data of the left side of the tree is the same as the right side of the tree. 

Here's an example of a symmetrical k-ary tree.
        4
     /     \
    3        3
  / | \    / | \
9   4  1  1  4  9
Given a k-ary tree, figure out if the tree is symmetrical. 
*/

export class KAryTreeNode {
  val: number;
  children: KAryTreeNode[] = [];

  constructor(val: number) {
    this.val = val;
  }
}

export function symmetricKAryTree(root: KAryTreeNode): boolean {
  const queue: KAryTreeNode[] = root.children;

  function checkValid(nodes: KAryTreeNode[]) {
    if (nodes.length % 2) {
      return false;
    }

    const length = nodes.length;
    const mid = Math.floor(length / 2);

    for (let index = 0; index < mid; index++) {
      const left = nodes[index];
      const right = nodes[length - 1 - index];

      if (left.val !== right.val) {
        return false;
      }
    }

    return true;
  }

  while (queue.length) {
    const toCompare: KAryTreeNode[] = [];

    while (queue.length) {
      toCompare.push(queue.pop());
    }

    if (!checkValid(toCompare)) {
      return false;
    }

    for (const item of toCompare) {
      queue.push(...item.children);
    }
  }

  return true;
}
