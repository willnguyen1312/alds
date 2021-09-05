/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a binary tree, find all duplicate subtrees (subtrees with the same value and same structure)
and return them as a list of list [subtree1, subtree2, ...]
where subtree1 is a duplicate of subtree2 etc.

# Looks like
#     1
#    / \
#   2   2
#  /   /
# 3   3

*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function duplicateSubtrees(root: BinaryTreeNode): string[] {
  const countMap: Map<string, number> = new Map();

  inorderTraversal(root);

  function inorderTraversal(node: BinaryTreeNode) {
    if (!node) return '';

    let str = '(';
    str += inorderTraversal(node.left);
    str += node.data.toString();
    str += inorderTraversal(node.right);
    str += ')';

    countMap.set(str, (countMap.get(str) || 0) + 1);

    return str;
  }

  let result: string[] = [];

  for (const [key, value] of countMap) {
    if (value >= 2) {
      result.push(key);
    }
  }

  return result;
}
