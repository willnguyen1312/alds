import { isomorphicString } from './isomorphicString';

describe('isomorphicString function', () => {
  it('should work', () => {
    expect(isomorphicString('egg', 'add')).toBe(true);
    expect(isomorphicString('foo', 'bar')).toBe(false);
  });
});
