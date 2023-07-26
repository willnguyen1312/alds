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

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }

  const nextNode = head.next
  head.next = head.next.next
  nextNode.next = head
  head.next = swapPairs(nextNode.next.next)
  return nextNode
}
