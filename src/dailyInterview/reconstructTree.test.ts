import { reconstructTree } from "./reconstructTree"

describe("reconstructTree function", () => {
  it("should work", () => {
    expect(
      reconstructTree(
        ["a", "b", "d", "e", "c", "f", "g"],
        ["d", "b", "e", "a", "f", "c", "g"],
      ),
    ).toMatchInlineSnapshot(`
BinaryTreeNode {
  "left": BinaryTreeNode {
    "left": BinaryTreeNode {
      "val": "d",
    },
    "right": BinaryTreeNode {
      "val": "e",
    },
    "val": "b",
  },
  "right": BinaryTreeNode {
    "left": BinaryTreeNode {
      "val": "f",
    },
    "right": BinaryTreeNode {
      "val": "g",
    },
    "val": "c",
  },
  "val": "a",
}
`)
  })
})
