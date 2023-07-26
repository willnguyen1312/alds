import { add, LinkedListNode } from "./add"

describe("add", () => {
  it("should add correctly", () => {
    const first = new LinkedListNode(2)
    first.next = new LinkedListNode(4)
    first.next.next = new LinkedListNode(3)

    const second = new LinkedListNode(5)
    second.next = new LinkedListNode(6)
    second.next.next = new LinkedListNode(4)

    const result = add(first, second)
    expect(result).toMatchInlineSnapshot(`
      LinkedListNode {
        "next": LinkedListNode {
          "next": LinkedListNode {
            "next": null,
            "val": 8,
          },
          "val": 0,
        },
        "val": 7,
      }
    `)
  })
})
