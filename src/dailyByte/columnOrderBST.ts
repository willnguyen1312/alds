/*
Given a binary tree, return its column order traversal from top to bottom and left to right.
Note: if two nodes are in the same row and column, order them from left to right. 

Ex: Given the following tree…

    8
   / \
  2   29
     /  \
    3    9
return [[2], [8, 3], [29], [9]]
Ex: Given the following tree…

     100
    /   \
  53     78
 / \    /  \
32  3  9    20
return [[32], [53], [100, 3, 9], [78], [20]]
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function columnOrderBST(root: BinaryTreeNode): number[][] {
  const cache: Map<number, number[]> = new Map();

  function columnOrderBSTHelper(root: BinaryTreeNode, level = 0): number[][] {
    if (!root) {
      return;
    }

    let list: number[] = cache.get(level);

    if (!list) {
      list = [];
      list.push(root.data);
    } else {
      list.push(root.data);
    }

    cache.set(level, list);

    columnOrderBSTHelper(root.left, level - 1);

    columnOrderBSTHelper(root.right, level + 1);
  }

  columnOrderBSTHelper(root);

  const result: number[][] = [];

  for (const key of [...cache.keys()].sort()) {
    result.push(cache.get(key));
  }

  return result;
}
