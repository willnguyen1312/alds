/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a linked list, swap the position of the 1st and 2nd node,
then swap the position of the 3rd and 4th node etc.
*/

export class LinkedListNode {
  constructor(public data: number, public next?: LinkedListNode) {}
}

export function swapEveryTwoLinkedListNode(
  head: LinkedListNode
): LinkedListNode {
  if (!head.next) {
    return head;
  }

  let current = head;
  let prev: LinkedListNode;
  head = head.next;

  while (current.next) {
    let next = current.next;

    current.next = next.next;
    next.next = current;
    current = current.next;

    if (prev) {
      prev.next = next;
    }

    prev = next.next;
  }

  return head;
}
