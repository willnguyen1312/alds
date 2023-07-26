function isPalindrome(head: any): boolean {
  if (head === null || head.next === null) return true
  let slow: any = head,
    fast: any = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let reversed: any = reverse(slow)
  while (head !== slow && head?.val === reversed?.val) {
    head = head?.next
    reversed = reversed?.next
  }
  return head === slow
}

function reverse(node: any) {
  let dummy = new ListNode(-1),
    next
  while (node !== null) {
    next = node.next
    node.next = dummy.next
    dummy.next = node
    node = next
  }
  return dummy.next
}
