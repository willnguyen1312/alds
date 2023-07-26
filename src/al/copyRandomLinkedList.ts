function copyRandomList(
  head: ListNode | null | undefined,
): ListNode | null | undefined {
  const map = new Map<ListNode, ListNode>()
  return buildRecur(head, map)
}

function buildRecur(head: any, map: Map<ListNode, ListNode>): any {
  if (head === null) return null
  if (map.has(head)) return map.get(head)
  let newHead: any = new ListNode(head.val)
  map.set(head, newHead)
  newHead.next = buildRecur(head.next, map)
  newHead.random = buildRecur(head.random, map)
  return newHead
}

function copyRandomListIter(head: ListNode) {
  const map = new Map<ListNode, ListNode>()
  let cur: any = head
  while (cur !== null) {
    map.set(cur, new ListNode(cur?.val))
    cur = cur.next
  }
  cur = head
  while (cur !== null) {
    ;(map.get(cur) as any).next = map.get(cur.next)
    ;(map.get(cur) as any).random = map.get(cur.random)
    cur = cur.next
  }

  return map.get(head)
}
