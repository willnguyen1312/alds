import {
  BinaryTreeNode,
  filterBinaryTreeLeaves,
} from "./filterBinaryTreeLeaves"

describe("filterBinaryTreeLeaves function", () => {
  it("should work", () => {
    const n5 = new BinaryTreeNode(2)
    const n4 = new BinaryTreeNode(1)
    const n3 = new BinaryTreeNode(1, n4)
    const n2 = new BinaryTreeNode(1, n5)
    const n1 = new BinaryTreeNode(1, n2, n3)

    expect(filterBinaryTreeLeaves(n1, 1)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 1,
  "left": BinaryTreeNode {
    "data": 1,
    "left": BinaryTreeNode {
      "data": 2,
      "left": null,
      "right": null,
    },
    "right": null,
  },
  "right": null,
}
`)
  })
})
