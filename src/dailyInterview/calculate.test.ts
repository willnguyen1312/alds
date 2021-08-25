import { calculate } from './calculate';

describe('calculate', () => {
  it('should work', () => {
    expect(calculate(`- (3 + ( 2 - 1 ) )`)).toBe(-4);
  });
});
