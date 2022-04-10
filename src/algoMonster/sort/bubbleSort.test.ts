import { bubbleSort } from './bubbleSort';

describe('bubbleSort function', () => {
  it('should work', () => {
    expect(bubbleSort([1, 3, 2, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
