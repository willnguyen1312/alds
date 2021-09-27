export class LinkedListNode {
  val: number;
  next: null | LinkedListNode = null;
  constructor(val: number) {
    this.val = val;
  }
}

export function add(l1: LinkedListNode | null, l2: LinkedListNode | null) {
  let list = new LinkedListNode(0);
  let currentNode = list;

  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new LinkedListNode(sum);
    currentNode = currentNode.next;

    sum = carry;
    carry = 0;
  }

  return list.next;
}
