/*
This problem was asked by Google.

Given the head of a singly linked list, reverse it in-place.
*/

export class LinkedListNode {
  constructor(public data: number, public next?: LinkedListNode) {}
}

export function reverseLinkedListInPlace(head: LinkedListNode): LinkedListNode {
  let current = head;
  let previous = null;

  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
