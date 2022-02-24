import { getDayOccurTime } from './dayOccurTimes';

describe('dayOccurTimes function', () => {
  it('should work', () => {
    const actual = getDayOccurTime(1084);
    expect(actual).toEqual(['Tuesday', 'Wednesday']);
  });
});
