/*
Given a binary tree and a target, return whether or not
there exists a root to leaf path such that all values
along the path sum to the target. 

Ex: Given the following tree…

      1
     / \
    5   2
   /   / \
  1  12   29
and a target of 15, return true as the path 1->2->12 sums to 15.
Ex: Given the following tree…

     104
    /   \
  39     31
 / \    /  \
32  1  9    10
and a target of 175, return true as the path 104->39->32 sums to 175.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

function getSum(numbs: number[]) {
  return numbs.reduce((a, b) => a + b);
}

export function rootToLeafPathSum(
  root: BinaryTreeNode,
  target: number
): boolean {
  function collect(node: BinaryTreeNode, path: number[]): boolean {
    if (!node.left && !node.right) {
      const found = getSum(path) === target;
      return found;
    }

    if (node.left) {
      path.push(node.left.data);
      const found = collect(node.left, path);
      path.pop();

      if (found) {
        return true;
      }
    }

    if (node.right) {
      path.push(node.right.data);
      const found = collect(node.right, path);
      path.pop();

      if (found) {
        return true;
      }
    }

    return false;
  }

  return collect(root, [root.data]);
}
