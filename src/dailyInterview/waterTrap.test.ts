import { waterTrap } from './waterTrap';

describe('waterTrap', () => {
  it('should work', () => {
    expect(waterTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
});
