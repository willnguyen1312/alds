import { defangIpAddress } from './defangIpAddress';

describe('defangIpAddress function', () => {
  it('should work', () => {
    const actual = defangIpAddress('127.0.0.1');
    expect(actual).toBe('127[.]0[.]0[.]1');
  });
});
