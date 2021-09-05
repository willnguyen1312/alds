import { createBalancedBST } from './createBalancedBST';

describe('createBalancedBST function', () => {
  it('should work', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];

    expect(createBalancedBST(input)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 4,
  "left": BinaryTreeNode {
    "data": 2,
    "left": BinaryTreeNode {
      "data": 1,
      "left": null,
      "right": null,
    },
    "right": BinaryTreeNode {
      "data": 3,
      "left": null,
      "right": null,
    },
  },
  "right": BinaryTreeNode {
    "data": 6,
    "left": BinaryTreeNode {
      "data": 5,
      "left": null,
      "right": null,
    },
    "right": BinaryTreeNode {
      "data": 7,
      "left": null,
      "right": null,
    },
  },
}
`);
  });
});
