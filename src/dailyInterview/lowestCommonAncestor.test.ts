import {
  BinaryTreeNode,
  lowestCommonAncestor,
  lowestCommonAncestor2,
} from "./lowestCommonAncestor"

describe("lowestCommonAncestor function", () => {
  it("should work", () => {
    const root = new BinaryTreeNode("a")
    root.left = new BinaryTreeNode("b")
    root.left.parent = root
    root.right = new BinaryTreeNode("c")
    root.right.parent = root
    const a = (root.right.left = new BinaryTreeNode("d"))
    root.right.left.parent = root.right
    const b = (root.right.right = new BinaryTreeNode("e"))
    root.right.right.parent = root.right

    expect(lowestCommonAncestor(root, a, b)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "parent": [Circular],
    "val": "d",
  },
  "parent": BinaryTreeNode {
    "left": BinaryTreeNode {
      "parent": [Circular],
      "val": "b",
    },
    "right": [Circular],
    "val": "a",
  },
  "right": BinaryTreeNode {
    "parent": [Circular],
    "val": "e",
  },
  "val": "c",
}
`)

    expect(lowestCommonAncestor2(a, b)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "parent": [Circular],
    "val": "d",
  },
  "parent": BinaryTreeNode {
    "left": BinaryTreeNode {
      "parent": [Circular],
      "val": "b",
    },
    "right": [Circular],
    "val": "a",
  },
  "right": BinaryTreeNode {
    "parent": [Circular],
    "val": "e",
  },
  "val": "c",
}
`)
  })
})
