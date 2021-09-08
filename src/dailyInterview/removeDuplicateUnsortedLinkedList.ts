/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a linked list, remove all duplicate values from the linked list.

For instance, given 1 -> 2 -> 3 -> 3 -> 4, then we wish to return the linked list 1 -> 2 -> 4.
*/

export class LinkedListNode {
  constructor(public data: number, public next?: LinkedListNode) {}
}

export function removeDuplicateUnsortedLinkedList(
  head: LinkedListNode
): LinkedListNode {
  const listSet: Set<number> = new Set();

  let current = head;
  let prev = null;

  while (current) {
    const cur = current.data;

    if (listSet.has(cur)) {
      prev.next = current.next;
    } else {
      listSet.add(cur);
      prev = current;
    }
    current = current.next;
  }

  return head;
}

export function removeDuplicateUnsortedLinkedList2(
  head: LinkedListNode
): LinkedListNode {
  let dummy = new LinkedListNode(0);

  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current) {
    while (current.next && prev.next.data === current.next.data) {
      current = current.next;
    }

    if (prev.next === current) {
      prev = prev.next;
    } else {
      prev.next = current.next;
    }

    current = current.next;
  }

  head = dummy.next;

  return head;
}
