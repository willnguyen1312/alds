/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a linked list, determine if the linked list has a cycle in it. For notation purposes, we use an integer pos which represents the zero-indexed position where the tail connects to.

Example:
Input: head = [4,3,2,1,0], pos = 1.  
Output: true
*/

export class LinkedListNode {
  val: number
  next: LinkedListNode | null
  constructor(val?: number, next?: LinkedListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function detectLinkedListCycle(head: LinkedListNode): LinkedListNode {
  let slow = head
  let fast = head

  if (head === null) return null

  do {
    if (fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
    } else {
      return null
    }
  } while (fast !== slow)

  let currentNode = head

  while (currentNode !== slow) {
    currentNode = currentNode.next
    slow = slow.next
  }

  return currentNode
}
