/*
This question is asked by Amazon. Given a non-empty linked list,
return the middle node of the list. If the linked list contains an even number of elements,
return the node closer to the end. 
Ex: Given the following linked lists... 

1->2->3->null, return 2
1->2->3->4->null, return 3
1->null, return 1
*/

export class LinkedListNode {
  constructor(
    public data: number,
    public next?: LinkedListNode,
  ) {}
}

export function findMiddleElement(head: LinkedListNode) {
  let length = 0
  let current = head

  while (current) {
    length++
    current = current.next
  }

  let middle = Math.floor(length / 2)
  current = head

  while (middle > 0) {
    current = current.next
    middle--
  }

  return current.data
}
