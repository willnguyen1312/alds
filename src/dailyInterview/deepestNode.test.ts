import {
  BinaryTreeNode,
  deepestNode,
  deepestNode2,
  deepestNode3,
} from "./deepestNode"

describe("deepestNode function", () => {
  it("should work", () => {
    const root = new BinaryTreeNode("a")
    root.left = new BinaryTreeNode("b")
    root.left.left = new BinaryTreeNode("d")
    root.right = new BinaryTreeNode("c")

    expect(deepestNode(root)).toMatchInlineSnapshot(`
      [
        BinaryTreeNode {
          "val": "d",
        },
        3,
      ]
    `)

    expect(deepestNode2(root)).toMatchInlineSnapshot(`
      [
        BinaryTreeNode {
          "val": "d",
        },
        3,
      ]
    `)
    expect(deepestNode3(root)).toMatchInlineSnapshot(`
BinaryTreeNode {
  "val": "d",
}
`)
  })
})
