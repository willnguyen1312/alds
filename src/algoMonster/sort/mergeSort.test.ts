import { mergeSort } from './mergeSort';

describe('mergeSort function', () => {
  it('should work', () => {
    expect(mergeSort([5, 4, 3])).toEqual([3, 4, 5]);
  });
});
