/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode()
  dummy.next = head

  let fast: any = dummy
  let slow: any = dummy

  for (let index = 0; index <= n; index++) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return dummy.next
}
