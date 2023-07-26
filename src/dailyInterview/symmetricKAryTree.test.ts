import { KAryTreeNode, symmetricKAryTree } from "./symmetricKAryTree"

describe("symmetricKAryTree function", () => {
  it("should work", () => {
    const tree1 = new KAryTreeNode(4)
    tree1.children = [new KAryTreeNode(3), new KAryTreeNode(3)]
    tree1.children[0].children = [
      new KAryTreeNode(9),
      new KAryTreeNode(4),
      new KAryTreeNode(1),
    ]
    tree1.children[1].children = [
      new KAryTreeNode(1),
      new KAryTreeNode(4),
      new KAryTreeNode(9),
    ]

    expect(symmetricKAryTree(tree1)).toBe(true)

    const tree2 = new KAryTreeNode(4)
    tree2.children = [new KAryTreeNode(3), new KAryTreeNode(3)]
    tree2.children[0].children = [
      new KAryTreeNode(4),
      new KAryTreeNode(1),
      new KAryTreeNode(94),
    ]
    tree2.children[1].children = [
      new KAryTreeNode(13),
      new KAryTreeNode(12),
      new KAryTreeNode(92),
    ]

    expect(symmetricKAryTree(tree2)).toBe(false)
  })
})
