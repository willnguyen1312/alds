import { pascalTriangle } from './pascalTriangle';

describe('pascalTriangle function', () => {
  it('should work', () => {
    const actual = pascalTriangle(5);
    expect(actual).toEqual([1, 5, 10, 10, 5, 1]);
  });
});
