import { createHeightBalancedBST } from "./createHeightBalancedBST"

describe("createHeightBalancedBST function", () => {
  it("should work", () => {
    expect(createHeightBalancedBST([1, 2, 3, 4, 5, 6, 7, 8]))
      .toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "left": BinaryTreeNode {
      "left": BinaryTreeNode {
        "val": 1,
      },
      "right": null,
      "val": 2,
    },
    "right": BinaryTreeNode {
      "val": 4,
    },
    "val": 3,
  },
  "right": BinaryTreeNode {
    "left": BinaryTreeNode {
      "val": 6,
    },
    "right": BinaryTreeNode {
      "val": 8,
    },
    "val": 7,
  },
  "val": 5,
}
`)
  })
})
