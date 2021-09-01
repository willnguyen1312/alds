import { decodeString } from './decodeString';

describe('decodeString function', () => {
  it('should work', () => {
    expect(decodeString('3[abc]')).toBe('abcabcabc');
    expect(decodeString('2[a2[b]c]')).toBe('abbcabbc');
  });
});
