export class LinkedListNode {
  val: number
  next?: LinkedListNode
  constructor(val: number, next?: LinkedListNode) {
    this.val = val
    this.next = next
  }
}

export function middleOfLinkedList(head: LinkedListNode) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow.val
}
