import { getShortPath } from './getShortPath';

describe('getShortPath function', () => {
  it('should work', () => {
    expect(getShortPath('/Users/John/Documents/../Desktop/./../')).toBe(
      '/Users/John/'
    );
    expect(getShortPath('////')).toBe('/');
    expect(getShortPath('/a/..')).toBe('/');
    expect(getShortPath('/a/../')).toBe('/');
    expect(getShortPath('/a/./')).toBe('/a/');
    expect(getShortPath('/home/')).toBe('/home/');
    expect(getShortPath('/a/./b/../../c/')).toBe('/c/');
    expect(getShortPath('/../../../../../a')).toBe('/a/');
    expect(getShortPath('/a/./b/./c/./d/')).toBe('/a/b/c/d/');
    expect(getShortPath('/a/../.././../../.')).toBe('/');
    expect(getShortPath('/a//b//c//////d')).toBe('/a/b/c/d/');
  });
});
