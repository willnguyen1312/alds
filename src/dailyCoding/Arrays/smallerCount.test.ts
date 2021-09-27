import { smallerCount } from './smallerCount';

describe('smallerCount function', () => {
  it('should work', () => {
    const actual = smallerCount([3, 4, 9, 6, 1]);
    expect(actual).toEqual([1, 1, 2, 1, 0]);
  });
});
