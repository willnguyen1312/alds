import { middleOfLinkedList, LinkedListNode } from './middleOfLinkedList';

describe('middleOfLinkedList function', () => {
  it('should work', () => {
    const root = new LinkedListNode(
      10,
      new LinkedListNode(
        20,
        new LinkedListNode(
          30,
          new LinkedListNode(40, new LinkedListNode(50, null))
        )
      )
    );

    expect(middleOfLinkedList(root)).toBe(30);
  });
});
