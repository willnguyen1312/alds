import { window } from './window';

describe('window function', () => {
  it('should work', () => {
    const actual = window([3, 7, 5, 6, 9]);
    expect(actual).toEqual([1, 3]);
  });
});
