import { QueueStack } from './QueueStack';

describe('QueueStack class', () => {
  it('should work', () => {
    const stack = new QueueStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const actual = stack.pop();
    expect(actual).toBe(3);
  });
});
