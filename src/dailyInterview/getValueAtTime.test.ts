import { getValueAtTime } from './getValueAtTime';

describe('getValueAtTime function', () => {
  it('should work', () => {
    const stuff = getValueAtTime();
    stuff.set(1, 1, 0);
    stuff.set(1, 2, 2);

    const actual1 = stuff.get(1, 1);
    expect(actual1).toBe(1);
    const actual2 = stuff.get(1, 3);
    expect(actual2).toBe(2);
  });
});
