function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return head;
  let size = 1;
  let cur: any = head;
  while (cur.next !== null) {
    size++;
    cur = cur.next;
  }

  let rotate = k % size;
  if (rotate === 0) return head;

  cur.next = head;

  while (size-- > rotate) cur = cur.next;

  head = cur.next;
  cur.next = null;

  return head;
}
