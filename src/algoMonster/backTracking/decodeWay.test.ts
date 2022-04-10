import { decodeWay } from './decodeWay';

describe('decodeWay function', () => {
  it('should work', () => {
    expect(decodeWay('123')).toEqual(3);
  });
});
