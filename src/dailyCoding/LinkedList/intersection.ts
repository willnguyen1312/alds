export class LinkedListNode {
  val: number
  next: null | LinkedListNode = null
  constructor(val: number) {
    this.val = val
  }
}

export function getIntersectionNode(
  headA: LinkedListNode | null,
  headB: LinkedListNode | null,
): LinkedListNode | null {
  if (headA === null || headB === null) {
    return null
  }

  let pA: any = headA
  let pB: any = headB

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }

  return pA
}
