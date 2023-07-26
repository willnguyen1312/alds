export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let slow: any = head
  let fast: any = head

  if (head == null) return null

  // Loop to find weather there is a cycle.
  do {
    if (fast?.next !== null && fast.next.next != null) {
      slow = slow?.next
      fast = fast.next.next
    } else {
      return null
    }
  } while (fast !== slow)

  let currentNode: any = head

  // Loop to find the start of the cycle.
  while (currentNode != slow) {
    currentNode = currentNode.next
    slow = slow.next
  }
  return currentNode
}
