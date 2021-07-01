import { quickSortIterative, quickSortRecursive } from './quickSort';

describe('quickSort', () => {
  it('should work for iterative', () => {
    const input = [2, 1, 3];
    quickSortIterative(input);
    expect(input).toEqual([1, 2, 3]);
  });

  it('should work for recursive', () => {
    const input = [2, 1, 3];
    quickSortRecursive(input, 0, input.length - 1);
    expect(input).toEqual([1, 2, 3]);
  });
});
