import { subArrayWithTarget } from './subArrayWithTarget';

describe('subArrayWithTarget function', () => {
  it('should work', () => {
    expect(subArrayWithTarget([1, 3, 2, 5, 7, 2], 14)).toEqual([2, 5, 7]);
  });
});
