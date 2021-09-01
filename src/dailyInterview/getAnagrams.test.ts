import { getAnagrams } from './getAnagrams';

describe('getAnagrams function', () => {
  it('should work', () => {
    expect(getAnagrams(['abc', 'bcd', 'cba', 'cbd', 'efg'])).toEqual([
      ['abc', 'cba'],
      ['bcd', 'cbd'],
      ['efg'],
    ]);
  });
});
