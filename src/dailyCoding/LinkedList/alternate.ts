export class LinkedListNode {
  val: number;
  next: null | LinkedListNode = null;
  constructor(val: number, next?: LinkedListNode) {
    this.val = val;
    this.next = next;
  }
}

export function alternate(node: LinkedListNode): LinkedListNode {
  let prev = node;
  let cur = node.next;

  while (cur) {
    if (prev.val > cur.val) {
      [prev.val, cur.val] = [cur.val, prev.val];
    }

    if (!cur.next) {
      break;
    }
    if (cur.next.val > cur.val) {
      [cur.next.val, cur.val] = [cur.val, cur.next.val];
    }

    prev = cur.next;
    cur = cur.next.next;
  }

  return node;
}
