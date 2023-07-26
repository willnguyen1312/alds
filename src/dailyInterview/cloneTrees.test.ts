import { BinaryTreeNode, cloneTreesIter, cloneTreesRecur } from "./cloneTrees"

describe("cloneTrees function", () => {
  it("should work", () => {
    const a = new BinaryTreeNode(1)
    a.left = new BinaryTreeNode(2)
    a.right = new BinaryTreeNode(3)
    a.right.left = new BinaryTreeNode(4)
    a.right.right = new BinaryTreeNode(5)

    const b = new BinaryTreeNode(1)
    b.left = new BinaryTreeNode(2)
    b.right = new BinaryTreeNode(3)
    b.right.left = new BinaryTreeNode(4)
    b.right.right = new BinaryTreeNode(5)

    const actual1 = cloneTreesIter(a, b, a.right.left)
    expect(actual1).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 4,
  "left": undefined,
  "right": undefined,
}
`)

    const actual2 = cloneTreesRecur(a, b, a.right.left)
    expect(actual2 === actual1).toBe(true)
  })
})
