import { sameValues } from './sameValues';

describe('sameValues function', () => {
  it('should work', () => {
    expect(sameValues([[1, 2, 3], [1, 2], [1]])).toEqual([1]);
    expect(sameValues([[4, 5, 6], [7, 8, 9], [10]])).toEqual([]);
  });
});
