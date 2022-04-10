import { findPeakOfTheMountain } from './findPeakOfTheMountain';

describe('findPeakOfTheMountain function', () => {
  it('should work', () => {
    expect(findPeakOfTheMountain([1, 2, 3, 1])).toEqual(2);
  });
});
