import { Queue } from './queueByTwoStacks';

describe('Queue from two Stacks class', () => {
  it('should work', () => {
    const actual: number[] = [];
    const queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);

    actual.push(queue.deQueue());
    actual.push(queue.deQueue());
    actual.push(queue.deQueue());

    const expected = [1, 2, 3];
    expect(actual).toEqual(expected);
  });
});
