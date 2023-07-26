/*
This question is asked by Facebook. Given a linked list, containing unique values, reverse it,
and return the result. 

Ex: Given the following linked lists...

1->2->3->null, return a reference to the node that contains 3 which
points to a list that looks like the following: 3->2->1->null
7->15->9->2->null, return a reference to the node that contains 2 which
points to a list that looks like the following: 2->9->15->7->null
1->null, return a reference to the node that contains 1 which points to a list that
looks like the following: 1->null
*/

export class LinkedListNode {
  constructor(
    public data: number,
    public next?: LinkedListNode,
  ) {}
}

export function reverseList(head: LinkedListNode) {
  function reverseListHelper(head: LinkedListNode, tail: LinkedListNode) {
    if (!head) {
      return tail
    }
    const next = head.next
    head.next = tail

    return reverseListHelper(next, head)
  }

  return reverseListHelper(head, null)
}
