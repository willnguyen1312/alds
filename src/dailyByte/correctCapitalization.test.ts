import { correctCapitalization } from './correctCapitalization';

describe('correctCapitalization function', () => {
  it('should work', () => {
    expect(correctCapitalization('USA')).toBe(true);
    expect(correctCapitalization('Calvin')).toBe(true);
    expect(correctCapitalization('compUter')).toBe(false);
    expect(correctCapitalization('coding')).toBe(true);
  });
});
