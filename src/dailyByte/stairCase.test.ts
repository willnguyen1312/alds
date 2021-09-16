import { stairCase } from './stairCase';

describe('stairCase function', () => {
  it('should work', () => {
    const actual = stairCase(3);
    expect(actual).toBe(3);
  });
});
