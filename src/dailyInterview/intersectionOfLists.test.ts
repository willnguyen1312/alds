import { intersectionOfLists } from './intersectionOfLists';

describe('intersectionOfLists function', () => {
  it('should work', () => {
    const actual = intersectionOfLists([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]);
    expect(actual).toEqual([4]);
  });
});
