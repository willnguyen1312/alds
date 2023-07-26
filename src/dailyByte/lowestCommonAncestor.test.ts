import { BinaryTreeNode, lowestCommonAncestor } from "./lowestCommonAncestor"

describe("lowestCommonAncestor function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(7)
    node.left = new BinaryTreeNode(2)
    node.left.left = new BinaryTreeNode(1)
    node.left.right = new BinaryTreeNode(5)
    node.right = new BinaryTreeNode(9)

    const actual = lowestCommonAncestor(node, node.left.left, node.left)
    expect(actual).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 2,
  "left": BinaryTreeNode {
    "data": 1,
    "left": undefined,
    "right": undefined,
  },
  "right": BinaryTreeNode {
    "data": 5,
    "left": undefined,
    "right": undefined,
  },
}
`)
  })
})
