import { validAnagram } from './validAnagram';

describe('validAnagram function', () => {
  it('should work', () => {
    const actual = validAnagram('cat', 'tac');
    expect(actual).toBe(true);
    const actual2 = validAnagram('listen', 'silent');
    expect(actual2).toBe(true);
    const actual3 = validAnagram('program', 'function');
    expect(actual3).toBe(false);
  });
});
