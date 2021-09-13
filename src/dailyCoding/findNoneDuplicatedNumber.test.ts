import { findNoneDuplicatedNumber } from './findNoneDuplicatedNumber';

describe('findNoneDuplicatedNumber function', () => {
  it('should work', () => {
    const actual = findNoneDuplicatedNumber([6, 1, 3, 3, 3, 6, 6]);
    expect(actual).toBe(1);
  });
});
