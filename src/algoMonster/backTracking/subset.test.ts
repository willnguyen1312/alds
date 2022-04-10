import { subset } from './subset';

describe('subset function', () => {
  it('should work', () => {
    expect(subset([1, 2, 3])).toEqual([
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });
});
