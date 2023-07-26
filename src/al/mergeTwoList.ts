export class LinkedListNode {
  constructor(
    public data: number,
    public next?: LinkedListNode,
  ) {}
}

function mergeTwoLists(
  l1: LinkedListNode | null,
  l2: LinkedListNode | null,
): LinkedListNode | null {
  let dummy = new LinkedListNode(0)
  let cur = dummy
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      while (l2 !== null) {
        cur.next = new LinkedListNode(l2.data)
        l2 = l2.next
        cur = cur.next
      }
      break
    }

    if (l2 === null) {
      while (l1 !== null) {
        cur.next = new LinkedListNode(l1.data)
        l1 = l1.next
        cur = cur.next
      }
      break
    }

    if (l1.data <= l2.data) {
      cur.next = new LinkedListNode(l1.data)
      l1 = l1.next
    } else {
      cur.next = new LinkedListNode(l2.data)
      l2 = l2.next
    }
    cur = cur.next
  }
  return dummy.next
}

function mergeTwoListsRecursive(l1: LinkedListNode, l2: LinkedListNode) {
  if (l1 === null) return l2
  if (l2 === null) return l1
  let head = null

  if (l1.data <= l2.data) {
    head = l1
    head.next = mergeTwoListsRecursive(l1.next, l2)
  } else {
    head = l2
    head.next = mergeTwoListsRecursive(l1, l2.next)
  }

  return head
}
