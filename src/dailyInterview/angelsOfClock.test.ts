import { angelsOfClock } from './angelsOfClock';

describe('angelsOfClock function', () => {
  it('should work', () => {
    expect(angelsOfClock(3, 10)).toBe(35);
    expect(angelsOfClock(3, 15)).toBe(7.5);
    expect(angelsOfClock(3, 30)).toBe(75);
    expect(angelsOfClock(12, 30)).toBe(165);
  });
});
