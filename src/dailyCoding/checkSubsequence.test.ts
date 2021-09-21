import { checkSubsequence } from './checkSubsequence';

describe('checkSubsequence function', () => {
  it('should work', () => {
    const actual1 = checkSubsequence('abc', 'aabbcc');
    expect(actual1).toBe(true);

    const actual2 = checkSubsequence('cpu', 'computer');
    expect(actual2).toBe(true);

    const actual3 = checkSubsequence('xyz', 'axbyc');
    expect(actual3).toBe(false);
  });
});
