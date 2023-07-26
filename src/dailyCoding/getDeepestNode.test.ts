import { BinaryTreeNode, getDeepestNode } from "./getDeepestNode"

describe("getDeepestNode function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode("a")
    node.right = new BinaryTreeNode("c")
    node.left = new BinaryTreeNode("b")
    node.left.left = new BinaryTreeNode("d")

    const actual = getDeepestNode(node)
    expect(actual).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": "d",
  "left": undefined,
  "right": undefined,
}
`)
  })
})
