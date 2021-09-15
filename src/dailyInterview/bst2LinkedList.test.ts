import { BinaryTreeNode, bst2LinkedList } from './bst2LinkedList';

describe('bst2LinkedList function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(5);
    node.left = new BinaryTreeNode(2);
    node.left.left = new BinaryTreeNode(1);
    node.left.right = new BinaryTreeNode(3);
    node.right = new BinaryTreeNode(9);

    bst2LinkedList(node);
    expect(node).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 5,
  "left": null,
  "right": BinaryTreeNode {
    "data": 2,
    "left": null,
    "right": BinaryTreeNode {
      "data": 1,
      "left": undefined,
      "right": BinaryTreeNode {
        "data": 3,
        "left": undefined,
        "right": BinaryTreeNode {
          "data": 9,
          "left": undefined,
          "right": undefined,
        },
      },
    },
  },
}
`);
  });
});
