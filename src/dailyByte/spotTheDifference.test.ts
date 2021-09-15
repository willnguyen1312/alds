import { spotTheDifference } from './spotTheDifference';

describe('spotTheDifference function', () => {
  it('should work', () => {
    const actual = spotTheDifference('foobar', 'barfoot');
    expect(actual).toBe('t');

    const actual2 = spotTheDifference('coding', 'ingcod');
    expect(actual2).toBe('');
  });
});
