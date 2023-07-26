/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a sorted linked list of integers, remove all the duplicate elements in the linked list
so that all elements in the linked list are unique.
*/

export class LinkedListNode {
  constructor(
    public data: number,
    public next?: LinkedListNode,
  ) {}
}

export function removeDuplicateLinkedList(
  head: LinkedListNode,
): LinkedListNode {
  let current = head

  while (current) {
    let next = current.next
    while (next && next.next && next.data === next.next.data) {
      next = next.next
    }

    current.next = next
    current = next
  }

  return head
}
