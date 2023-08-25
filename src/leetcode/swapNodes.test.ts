function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let slow = head
  let fast = head
  let i = k - 1
  while (i !== 0) {
    fast = fast.next
    i--
  }
  let left = fast
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  let temp = left.val
  left.val = slow.val
  slow.val = temp
  return head
}

describe("swapNodes", () => {
  it("should work", () => {
    const head = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    }
    const actual = swapNodes(head, 2)
    expect(actual).toEqual({
      val: 1,
      next: {
        val: 4,
        next: {
          val: 3,
          next: {
            val: 2,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    })
  })
})
