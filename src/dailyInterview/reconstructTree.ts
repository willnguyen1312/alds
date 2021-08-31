/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

You are given the preorder and inorder traversals of a binary tree in the form of arrays.
Write a function that reconstructs the tree represented by these traversals.

Example:
Preorder: [a, b, d, e, c, f, g]
Inorder: [d, b, e, a, f, c, g]

The tree that should be constructed from these traversals is:

    a
   / \
  b   c
 / \ / \
d  e f  g

Here's a start:
*/

export class BinaryTreeNode {
  val: string;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(val: string) {
    this.val = val;
  }
}

export function reconstructTree(preorder: string[], inorder: string[]): BinaryTreeNode {
  let root: BinaryTreeNode = null;
  const set = new Set();
  const stack = [];

  for (let pre = 0, In = 0; pre < preorder.length; ) {
    let node = null;

    do {
      node = new BinaryTreeNode(preorder[pre]);
      if (!root) {
        root = node;
      }
      if (stack.length !== 0) {
        if (set.has(stack[stack.length - 1])) {
          set.delete(stack[stack.length - 1]);
          stack.pop().right = node;
        } else {
          stack[stack.length - 1].left = node;
        }
      }
      stack.push(node);
    } while (preorder[pre++] !== inorder[In] && pre < preorder.length);

    node = null;
    while (stack.length !== 0 && In < inorder.length && stack[stack.length - 1].val === inorder[In]) {
      node = stack.pop();
      In++;
    }

    if (node) {
      set.add(node);
      stack.push(node);
    }
  }

  return root;
}
