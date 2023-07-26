import { LinkedListNode, detectLinkedListCycle } from "./detectLinkedListCycle"

describe("detectLinkedListCycle function", () => {
  it("should work", () => {
    const testHead = new LinkedListNode(4)
    const node1 = new LinkedListNode(3)
    testHead.next = node1
    const node2 = new LinkedListNode(2)
    node1.next = node2
    const node3 = new LinkedListNode(1)
    node2.next = node3
    const testTail = new LinkedListNode(0)
    node3.next = testTail
    testTail.next = node1

    expect(detectLinkedListCycle(testHead)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": [Circular],
        "val": 0,
      },
      "val": 1,
    },
    "val": 2,
  },
  "val": 3,
}
`)
  })
})
