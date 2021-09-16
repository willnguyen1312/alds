import { messageDecryption } from './messageDecryption';

describe('countWaysOfDecode function', () => {
  it('should work', () => {
    const actual = messageDecryption('23');
    expect(actual).toBe(2);
  });
});
