import { invertBinaryTree, BinaryTreeNode } from './invertBinaryTree';

describe('invertBinaryTree function', () => {
  it('should work', () => {
    const root = new BinaryTreeNode('a');
    root.left = new BinaryTreeNode('b');
    root.right = new BinaryTreeNode('c');
    root.left.left = new BinaryTreeNode('d');
    root.left.right = new BinaryTreeNode('e');
    root.right.left = new BinaryTreeNode('f');

    expect(invertBinaryTree(root)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "left": undefined,
    "right": BinaryTreeNode {
      "left": undefined,
      "right": undefined,
      "val": "f",
    },
    "val": "c",
  },
  "right": BinaryTreeNode {
    "left": BinaryTreeNode {
      "left": undefined,
      "right": undefined,
      "val": "e",
    },
    "right": BinaryTreeNode {
      "left": undefined,
      "right": undefined,
      "val": "d",
    },
    "val": "b",
  },
  "val": "a",
}
`);
  });
});
