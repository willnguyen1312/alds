import { perfectNumber } from './perfectNumber';

describe('perfectNumber function', () => {
  it('should work', () => {
    const actual1 = perfectNumber(28);
    expect(actual1).toBe(true);
    const actual2 = perfectNumber(7);
    expect(actual2).toBe(false);
  });
});
