import { BinaryTreeNode, largestSubtree } from './largestSubtree';

describe('largestSubtree function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(5);
    node.left = new BinaryTreeNode(3);
    node.left.left = new BinaryTreeNode(2);
    node.left.right = new BinaryTreeNode(4);
    node.left.right.right = new BinaryTreeNode(4.5);

    node.right = new BinaryTreeNode(10);
    node.right.right = new BinaryTreeNode(20);

    const actual = largestSubtree(node);
    expect(actual).toMatchInlineSnapshot(`
      [
        5,
        BinaryTreeNode {
          "data": 5,
          "left": BinaryTreeNode {
            "data": 3,
            "left": BinaryTreeNode {
              "data": 2,
              "left": undefined,
              "right": undefined,
            },
            "right": BinaryTreeNode {
              "data": 4,
              "left": undefined,
              "right": BinaryTreeNode {
                "data": 4.5,
                "left": undefined,
                "right": undefined,
              },
            },
          },
          "right": null,
        },
      ]
    `);
  });
});
