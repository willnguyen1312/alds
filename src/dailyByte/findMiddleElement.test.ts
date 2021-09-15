import { LinkedListNode, findMiddleElement } from './findMiddleElement';

describe('findMiddleElement function', () => {
  it('should work', () => {
    const node = new LinkedListNode(
      1,
      new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4)))
    );

    const actual = findMiddleElement(node);
    expect(actual).toBe(3);
  });
});
