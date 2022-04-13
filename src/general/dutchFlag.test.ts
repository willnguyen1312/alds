import { dutchFlag } from './dutchFlag';

describe('dutchFlag function', () => {
  it('should work', () => {
    expect(dutchFlag([1, 2, 0, 0, 1])).toEqual([0, 0, 1, 1, 2]);
  });
});
