import { findPair } from './findPair';

describe('findPair', () => {
  it('should work', () => {
    const numbs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(findPair(numbs, 10)).toBe(true);
    expect(findPair(numbs, 100)).toBe(false);
  });
});
