import { threeSum, findTriplets } from './threeSum';

describe('threeSum function', () => {
  it('should work', () => {
    expect(threeSum([0, -1, 2, -3, 1], 0)).toEqual([
      [-3, 1, 2],
      [-1, 0, 1],
    ]);

    expect(findTriplets([0, -1, 2, -3, 1], 0)).toEqual([
      [0, -1, 1],
      [2, -3, 1],
    ]);
  });
});
