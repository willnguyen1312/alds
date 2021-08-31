import { sort012 } from './sort012';

describe('sort012 function', () => {
  it('should work', () => {
    expect(sort012([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2]);
  });
});
