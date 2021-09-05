import { findAnagram, findAnagram2 } from './findAnagram';

describe('findAnagram function', () => {
  it('should work', () => {
    const actual1 = findAnagram('acdbacdacb', 'abc');
    expect(actual1).toEqual([3, 7]);

    const actual2 = findAnagram2('acdbacdacb', 'abc');
    expect(actual2).toEqual([3, 7]);
  });
});
