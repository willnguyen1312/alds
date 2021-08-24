import { getFirstAndLastIndicesSortedArray } from './getFirstAndLastIndicesSortedArray';

describe('getFirstAndLastIndicesSortedArray function', () => {
  it('should work as expected', () => {
    const input = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15];
    const actual = getFirstAndLastIndicesSortedArray(input, 9);
    const expected = [6, 8];

    expect(actual).toEqual(expected);
  });
});
