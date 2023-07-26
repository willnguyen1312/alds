/*
This question is asked by Microsoft. Given a linked list, containing unique numbers,
return whether or not it has a cycle. 
Note: a cycle is a circular arrangement (i.e. one node points back to a previous node) 

Ex: Given the following linked lists...

1->2->3->1 -> true (3 points back to 1)
1->2->3 -> false
1->1 true (1 points to itself)
*/

export class LinkedListNode {
  constructor(
    public data: number,
    public next?: LinkedListNode,
  ) {}
}

export function detectCycle(head: LinkedListNode): boolean {
  let current = head
  const nodeSet: Set<number> = new Set()

  while (current) {
    if (nodeSet.has(current.data)) {
      return true
    }
    nodeSet.add(current.data)
    current = current.next
  }

  return false
}
