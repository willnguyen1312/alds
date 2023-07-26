import {
  LinkedListNode,
  rotateCounterClockwise,
  rotateClockwise,
} from "./rotateLinkedList"

describe("rotateLinkedList function", () => {
  it("should work", () => {
    const node = new LinkedListNode(
      1,
      new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4))),
    )

    expect(rotateCounterClockwise(node, 3)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": null,
        "val": 3,
      },
      "val": 2,
    },
    "val": 1,
  },
  "val": 4,
}
`)

    const node2 = new LinkedListNode(
      1,
      new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4))),
    )

    expect(rotateClockwise(node2, 3)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": null,
        "val": 1,
      },
      "val": 4,
    },
    "val": 3,
  },
  "val": 2,
}
`)
  })
})
