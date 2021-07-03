class NodeL {
  val: number;
  prev: Node | null;
  next: Node | null;
  child: Node | null;
  constructor(val?: number, prev?: Node, next?: Node, child?: Node) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

function flattenLinkedList(head: NodeL | null): NodeL | null {
  if (head === null) return head;
  let current: any = head;

  while (current !== null) {
    if (current.child === null) {
      current = current.next;
    } else {
      let temp = current.child;
      while (temp?.next !== null) temp = temp.next;
      temp.next = current.next;
      if (current.next !== null) {
        current.next.prev = temp;
      }
      current.next = current.child;
      current.child.prev = current;
      current.child = null;
    }
  }

  return head;
}
