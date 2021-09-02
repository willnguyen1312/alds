import { stringCompression } from './stringCompression';

describe('stringCompression function', () => {
  it('should work', () => {
    expect(stringCompression(['a', 'a', 'b', 'c', 'c', 'c'])).toEqual([
      'a',
      '2',
      'b',
      'c',
      '3',
    ]);
  });
});
