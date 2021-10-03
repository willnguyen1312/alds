import { generateRandomInt } from './generateRandomInt';

describe('generateRandomInt function  ', () => {
  it('should work', () => {
    const actual = generateRandomInt(1, 10);
    expect(actual).toBeLessThan(10);
    expect(actual).toBeGreaterThan(0);
  });
});
