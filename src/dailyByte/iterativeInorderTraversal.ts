/*
Given a binary tree, return a list containing its inorder traversal without using recursion.

Ex: Given the following tree…

      2     
     / \   
    1   3
return [1, 2, 3]
Ex: Given the following tree…

        2
       / \
      1   7
     / \
    4   8
return [4, 1, 8, 2, 7]
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function iterativeInorderTraversal(root: BinaryTreeNode): number[] {
  const result: number[] = [];
  let current = root;
  const stack: BinaryTreeNode[] = [];

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    const node = stack.pop();
    result.push(node.data);
    current = node.right;
  }

  return result;
}
