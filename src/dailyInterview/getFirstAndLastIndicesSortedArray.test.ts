import { getFirstAndLastIndicesSortedArray } from './getFirstAndLastIndicesSortedArray';

describe('getFirstAndLastIndicesSortedArray function', () => {
  it('should work as expected for the first case', () => {
    const input = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
    const actual = getFirstAndLastIndicesSortedArray(input, 9);
    const expected = [6, 8];

    expect(actual).toEqual(expected);
  });

  it('should work as expected for the second case', () => {
    const input = [1, 4];
    const actual = getFirstAndLastIndicesSortedArray(input, 4);
    const expected = [1, 1];

    expect(actual).toEqual(expected);
  });

  it('should work as expected for the third case', () => {
    const input = [1];
    const actual = getFirstAndLastIndicesSortedArray(input, 1);
    const expected = [0, 0];

    expect(actual).toEqual(expected);
  });

  it('should work as expected for the fourth case', () => {
    const input = [4];
    const actual = getFirstAndLastIndicesSortedArray(input, 1);
    const expected = [-1, -1];

    expect(actual).toEqual(expected);
  });
});
