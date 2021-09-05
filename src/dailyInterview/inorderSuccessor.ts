/*
Given a node in a binary search tree (may not be the root),find the next largest node
in the binary search tree (also known as an inorder successor).
The nodes in this binary search tree will also have a parent field to traverse up the tree.

tree = Node(3)
tree.left = Node(2)
tree.right = Node(4)
tree.left.parent = tree
tree.right.parent = tree
tree.left.left = Node(1)
tree.left.left.parent = tree.left
tree.right.right = Node(5)
tree.right.right.parent = tree.right
#     3
#    / \
#   2   4
#  /     \
# 1       5
print(inorder_successor(tree.left))
# 3
print(inorder_successor(tree.right))
# 5
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
    public parent?: BinaryTreeNode
  ) {}
}

export function inorderSuccessor(node: BinaryTreeNode): number {
  const isRoot = !node.parent;
  const isOnRight = isRoot || node.data > node.parent.data;
  const direction = isOnRight ? 'right' : 'parent';

  let current: BinaryTreeNode = node;

  while (current[direction]) {
    current = current[direction];
  }

  return current.data;
}
