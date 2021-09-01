import { MinStack } from './minStack';

describe('MinStack', () => {
  it('should work', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    expect(minStack.pop()).toBe(-3);
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });
});
