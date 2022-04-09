import { groupAnagrams } from './groupAnagrams';

describe('groupAnagrams function', () => {
  it('should work', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = groupAnagrams(input);

    expect(output).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });
});
