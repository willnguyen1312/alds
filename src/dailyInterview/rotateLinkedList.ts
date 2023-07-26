/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a linked list and a number k, rotate the linked list by k places.
*/

export class LinkedListNode {
  val: number
  next: LinkedListNode | null
  constructor(val?: number, next?: LinkedListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function rotateCounterClockwise(
  head: LinkedListNode,
  k: number,
): LinkedListNode {
  //   if (k === 0) return head;

  //   let current = head;

  //   while (current.next) current = current.next;

  //   current.next = head;
  //   current = head;

  //   for (let i = 0; i < k - 1; i++) current = current.next;

  //   head = current.next;

  //   return head;

  if (!head) {
    return null
  }

  const queue: LinkedListNode[] = []
  let current = head
  while (current) {
    queue.push(current)
    current = current.next
  }

  k = k % queue.length

  while (k) {
    queue[queue.length - 1].next = queue[0]
    queue.push(queue.shift())
    queue[queue.length - 1].next = null
    k--
  }

  return queue[0]
}

export function rotateClockwise(
  head: LinkedListNode,
  k: number,
): LinkedListNode {
  if (!head) {
    return null
  }

  const queue: LinkedListNode[] = []
  let current = head
  while (current) {
    queue.push(current)
    current = current.next
  }

  k = k % queue.length

  while (k) {
    queue[queue.length - 1].next = queue[0]
    queue.unshift(queue.pop())
    queue[queue.length - 1].next = null
    k--
  }

  return queue[0]
}
