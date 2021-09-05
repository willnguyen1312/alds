/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a binary tree, find the level in the tree where the sum of all nodes on that level is the greatest.

"""
    1          Level 0 - Sum: 1
   / \
  4   5        Level 1 - Sum: 9 
 / \ / \
3  2 4 -1      Level 2 - Sum: 8

"""
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

function getLevelSum(nodes: BinaryTreeNode[]): number {
  return nodes.reduce((acc, cur) => acc + cur.data, 0);
}

export function levelWithMaxSum(root: BinaryTreeNode): number {
  const queue: BinaryTreeNode[] = [root];
  let currentMax = root.data;
  let currentLevel = 0;
  let result = currentLevel;

  while (queue.length) {
    currentLevel++;
    const toQueue: BinaryTreeNode[] = [];

    while (queue.length) {
      const node = queue.pop();
      if (node.left) {
        toQueue.push(node.left);
      }
      if (node.right) {
        toQueue.push(node.right);
      }
    }

    const max = getLevelSum(toQueue);
    result = max > currentMax ? currentLevel : result;
    currentMax = Math.max(max, currentMax);
    queue.push(...toQueue);
  }

  return result;
}
