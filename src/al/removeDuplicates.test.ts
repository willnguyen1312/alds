import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
  it('should work for the first case', () => {
    const input = [1, 1, 2];
    const result = 2;

    expect(removeDuplicates(input)).toBe(result);
    expect(input.slice(0, result)).toEqual([1, 2]);
  });

  it('should work for the second case', () => {
    const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = 5;

    expect(removeDuplicates(input)).toBe(result);
    expect(input.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
  });
});
