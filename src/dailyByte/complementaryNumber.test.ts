import { complementaryNumber } from './complementaryNumber';

describe('complementaryNumber function', () => {
  it('should work', () => {
    const actual = complementaryNumber(27);
    expect(actual).toBe(4);
  });
});
