import { invertBST, BinaryTreeNode } from './invertBST';

describe('invertBinaryTree function', () => {
  it('should work', () => {
    const root = new BinaryTreeNode('a');
    root.left = new BinaryTreeNode('b');
    root.right = new BinaryTreeNode('c');
    root.left.left = new BinaryTreeNode('d');
    root.left.right = new BinaryTreeNode('e');
    root.right.left = new BinaryTreeNode('f');

    expect(invertBST(root)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": "a",
  "left": BinaryTreeNode {
    "data": "c",
    "left": undefined,
    "right": BinaryTreeNode {
      "data": "f",
      "left": undefined,
      "right": undefined,
    },
  },
  "right": BinaryTreeNode {
    "data": "b",
    "left": BinaryTreeNode {
      "data": "e",
      "left": undefined,
      "right": undefined,
    },
    "right": BinaryTreeNode {
      "data": "d",
      "left": undefined,
      "right": undefined,
    },
  },
}
`);
  });
});
