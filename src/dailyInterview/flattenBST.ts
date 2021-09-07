/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a binary tree, flattenBST the binary tree using inorder traversal.
Instead of creating a new list, reuse the nodes, where the list is represented by following each right child.
As such the root should always be the first element in the list so you do not need to return anything
in the implementation, just rearrange the nodes such that following the right child will give us the list.

#      1
#    /   \
#   2     3
#  /     /
# 5     4

flatten_bst(n1)
print(n1)

# n1 should now look like
#   1
#    \
#     2
#      \
#       5
#        \
#         3
#          \
#           4

*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function flattenBST(node: BinaryTreeNode) {
  if (!node) return;

  if (!node.left && !node.right) return;

  if (node.left) {
    flattenBST(node.left);

    const originalRightNode = node.right;
    node.right = node.left;
    node.left = null;

    let curr = node.right;
    while (curr.right) {
      curr = curr.right;
    }

    curr.right = originalRightNode;
  }

  flattenBST(node.right);
}
