import { waysToMakeChange } from './waysToMakeChange';

describe('waysToMakeChange function', () => {
  it('should work', () => {
    const actual = waysToMakeChange(6, [2, 4, 6, 3]);
    expect(actual).toBe(4);
  });
});
