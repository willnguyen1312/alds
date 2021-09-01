/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a singly-linked list, reverse the list. This can be done iteratively or recursively. Can you get both solutions?

Example:
Input: 4 -> 3 -> 2 -> 1 -> 0 -> NULL
Output: 0 -> 1 -> 2 -> 3 -> 4 -> NULL
*/

export class LinkedListNode {
  val: number;
  next: null | LinkedListNode = null;
  constructor(val: number) {
    this.val = val;
  }
}

export function reverseLinkedListIter(node: LinkedListNode) {
  let current = node;
  let previous = null;

  while (current) {
    const nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
}

export function reverseLinkedListRecur(node: LinkedListNode) {
  return reverseLinkedListFromHead(node, null);
}

function reverseLinkedListFromHead(
  head: LinkedListNode | null,
  tail: LinkedListNode | null
) {
  if (head === null) {
    return tail;
  }

  const nextNode = head.next;
  head.next = tail;

  return reverseLinkedListFromHead(nextNode, head);
}
