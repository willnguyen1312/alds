import { MaxStack } from './maxStack';

describe('MaxStack class', () => {
  it('should work', () => {
    const stack = new MaxStack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(2);

    expect(stack.max()).toBe(3);

    stack.pop();
    stack.pop();

    expect(stack.max()).toBe(2);
  });
});
