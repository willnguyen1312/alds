import { BinaryTreeNode, fullBinaryTree } from "./fullBinaryTree"

describe("fullBinaryTree", () => {
  it("should work", () => {
    const tree = new BinaryTreeNode(1)
    tree.left = new BinaryTreeNode(2)
    tree.right = new BinaryTreeNode(3)
    tree.right.right = new BinaryTreeNode(4)
    tree.right.left = new BinaryTreeNode(9)
    tree.left.left = new BinaryTreeNode(0)
    tree.left.left.left = new BinaryTreeNode(-5)
    tree.left.left.right = new BinaryTreeNode(6)
    expect(fullBinaryTree(tree)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "left": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": -5,
    },
    "right": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": 6,
    },
    "val": 0,
  },
  "right": BinaryTreeNode {
    "left": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": 9,
    },
    "right": BinaryTreeNode {
      "left": null,
      "right": null,
      "val": 4,
    },
    "val": 3,
  },
  "val": 1,
}
`)
  })
})
