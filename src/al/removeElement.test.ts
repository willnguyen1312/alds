import { removeElement } from './removeElement';

describe('removeElement', () => {
  it('should work for the first case', () => {
    const input = [3, 2, 2, 3];
    const result = 2;

    expect(removeElement(input, 3)).toBe(result);
    expect(input.slice(0, result)).toEqual([2, 2]);
  });

  it('should work for the second case', () => {
    const input = [0, 1, 2, 2, 3, 0, 4, 2];
    const result = 5;

    expect(removeElement(input, 2)).toBe(result);
    expect(input.slice(0, result)).toEqual([0, 1, 3, 0, 4]);
  });

  it('should work for the third case', () => {
    const input = [0, 4, 4, 0, 4, 4, 4, 0, 2];
    const result = 4;

    expect(removeElement(input, 4)).toBe(result);
    expect(input.slice(0, result)).toEqual([0, 0, 0, 2]);
  });

  it('should work for the fourth case', () => {
    const input = [1, 1, 2];
    const result = 1;

    expect(removeElement(input, 1)).toBe(result);
    expect(input.slice(0, result)).toEqual([2]);
  });
});
