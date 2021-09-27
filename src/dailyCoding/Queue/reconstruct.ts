export function reconstruct(numbs: string[]): number[] {
  const result: number[] = [];
  const n = numbs.length - 1;
  const stack: number[] = [];

  for (let index = 0; index < n; index++) {
    if (numbs[index + 1] === '-') {
      stack.push(index);
    } else {
      result.push(index);
      while (stack.length) {
        result.push(stack.pop());
      }
    }
  }

  stack.push(n);

  while (stack.length) {
    result.push(stack.pop());
  }

  return result;
}
