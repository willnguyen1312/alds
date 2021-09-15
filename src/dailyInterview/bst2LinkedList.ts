/*
Given a binary search tree, rearrange the tree such that it forms a linked list
where all its values are in ascending order.


       5
      / \
    2    9
   / \ 
  1   3 
return...

1
 \
  2
   \
    3
     \
      5
       \
        9
*/

export class LinkedListNode {
  constructor(public data: number, public next?: LinkedListNode) {}
}

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function bst2LinkedList(node: BinaryTreeNode): LinkedListNode {
  if (!node) return;

  if (!node.left && !node.right) return;

  if (node.left) {
    bst2LinkedList(node.left);

    let originalRight = node.right;
    node.right = node.left;
    node.left = null;

    let curr = node.right;
    while (curr.right) {
      curr = curr.right;
    }

    curr.right = originalRight;
  }

  bst2LinkedList(node.right);
}
