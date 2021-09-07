import { BinaryTreeNode, flattenBST } from './flattenBST';

describe('flattenBST function', () => {
  it('should work', () => {
    const n5 = new BinaryTreeNode(5);
    const n4 = new BinaryTreeNode(4);
    const n3 = new BinaryTreeNode(3, n4);
    const n2 = new BinaryTreeNode(2, n5);
    const n1 = new BinaryTreeNode(1, n2, n3);
    flattenBST(n1);
    expect(n1).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 1,
  "left": null,
  "right": BinaryTreeNode {
    "data": 2,
    "left": null,
    "right": BinaryTreeNode {
      "data": 5,
      "left": undefined,
      "right": BinaryTreeNode {
        "data": 3,
        "left": null,
        "right": BinaryTreeNode {
          "data": 4,
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
