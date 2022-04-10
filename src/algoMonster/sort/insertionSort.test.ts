import { insertionSort } from './insertionSort';

describe('insertionSort', () => {
  it('should work', () => {
    expect(insertionSort([5, 2, 3])).toEqual([2, 3, 5]);
  });
});
