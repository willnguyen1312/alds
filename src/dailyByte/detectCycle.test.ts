import { LinkedListNode, detectCycle } from './detectCycle';

describe('detectCycle function', () => {
  it('should work', () => {
    const node = new LinkedListNode(
      1,
      new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(1)))
    );

    const actual = detectCycle(node);
    expect(actual).toBe(true);
  });
});
