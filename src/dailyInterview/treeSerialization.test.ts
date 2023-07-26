import {
  BinaryTreeNode,
  treeDeserialization,
  treeSerialization,
} from "./treeSerialization"

describe("treeSerialization", () => {
  it("should work", () => {
    const tree = new BinaryTreeNode(1)
    tree.left = new BinaryTreeNode(3)
    tree.left.left = new BinaryTreeNode(2)
    tree.left.right = new BinaryTreeNode(5)
    tree.right = new BinaryTreeNode(4)
    tree.right.right = new BinaryTreeNode(7)

    const serialized = treeSerialization(tree)
    expect(serialized).toMatchInlineSnapshot(`"[1,3,4,2,5,null,7]"`)

    const deserialized = treeDeserialization(serialized)
    expect(deserialized).toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "left": BinaryTreeNode {
      "val": 2,
    },
    "right": BinaryTreeNode {
      "val": 5,
    },
    "val": 3,
  },
  "right": BinaryTreeNode {
    "right": BinaryTreeNode {
      "val": 7,
    },
    "val": 4,
  },
  "val": 1,
}
`)
  })
})
