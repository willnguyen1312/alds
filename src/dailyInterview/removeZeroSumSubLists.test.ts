import { LinkedListNode, removeZeroSumSubLists } from "./removeZeroSumSubLists"

describe("removeZeroSumSubLists function", () => {
  it("should work", () => {
    const node = new LinkedListNode(10)
    node.next = new LinkedListNode(5)
    node.next.next = new LinkedListNode(-3)
    node.next.next.next = new LinkedListNode(-3)
    node.next.next.next.next = new LinkedListNode(1)
    node.next.next.next.next.next = new LinkedListNode(4)
    node.next.next.next.next.next.next = new LinkedListNode(-4)

    expect(removeZeroSumSubLists(node)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": null,
  "val": 10,
}
`)
  })
})
