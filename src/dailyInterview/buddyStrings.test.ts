import { buddyStrings } from './buddyStrings';

describe('buddyStrings function', () => {
  it('should work', () => {
    expect(buddyStrings('ab', 'ba')).toBe(true);
    expect(buddyStrings('ab', 'ab')).toBe(false);
    expect(buddyStrings('aa', 'aa')).toBe(true);
    expect(buddyStrings('aaaaaaabc', 'aaaaaaacb')).toBe(true);
    expect(buddyStrings('', 'aa')).toBe(false);
  });
});
