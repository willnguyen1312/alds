/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

You are given a singly linked list and an integer k.
Return the linked list, removing the k-th last element from the list. 

Try to do it in a single pass and using constant space.
*/

export class LinkedListNode {
  val: number
  next: null | LinkedListNode = null
  constructor(val: number) {
    this.val = val
  }
}

export function removeKthElementFromLinkedList(
  head: LinkedListNode,
  k: number,
) {
  let length = 0
  let currentNode = head

  while (currentNode) {
    length++
    currentNode = currentNode.next
  }

  let target = length - k
  currentNode = head
  let previous: LinkedListNode | null = null

  while (target !== 0) {
    previous = currentNode
    currentNode = currentNode.next
    target--
  }

  if (previous) {
    previous.next = currentNode.next
  }

  return head
}
