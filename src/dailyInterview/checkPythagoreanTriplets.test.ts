import { checkPythagoreanTriplets } from './checkPythagoreanTriplets';

describe('checkPythagoreanTriplets function', () => {
  it('should work', () => {
    expect(checkPythagoreanTriplets([3, 12, 5, 13])).toBe(true);
  });
});
