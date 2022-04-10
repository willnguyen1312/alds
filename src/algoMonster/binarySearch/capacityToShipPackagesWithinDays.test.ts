import { capacityToShipPackagesWithinDays } from './capacityToShipPackagesWithinDays';

describe('capacityToShipPackagesWithinDays function', () => {
  it('should work', () => {
    expect(
      capacityToShipPackagesWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)
    ).toEqual(15);
  });
});
