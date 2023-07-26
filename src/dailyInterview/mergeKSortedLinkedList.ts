/*
This problem was asked by Google.

Given k sorted singly linked lists, write a function to
merge all the lists into one sorted singly linked list.
*/

export class LinkedListNode {
  constructor(
    public val?: number,
    public next?: LinkedListNode,
  ) {}
}

export function mergeKLists(lists: LinkedListNode[]) {
  let current: LinkedListNode
  const result: number[] = []

  for (let i = 0; i < lists.length; i++) {
    current = lists[i]
    while (current) {
      result.push(current.val)
      current = current.next
    }
  }

  result.sort((a, b) => a - b)

  let dummyHead = new LinkedListNode()
  current = dummyHead

  for (let i = 0; i < result.length; i++) {
    dummyHead.next = new LinkedListNode(result[i])
    dummyHead = dummyHead.next
  }

  return current.next
}
