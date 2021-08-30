import { createBalancedBST } from './createBalancedBST';

describe('createBalancedBST function', () => {
  it('should work', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];

    expect(createBalancedBST(input)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "left": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": 1,
    },
    "right": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": 3,
    },
    "val": 2,
  },
  "right": BinaryTreeNode {
    "left": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": 5,
    },
    "right": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": 7,
    },
    "val": 6,
  },
  "val": 4,
}
`);
  });
});
