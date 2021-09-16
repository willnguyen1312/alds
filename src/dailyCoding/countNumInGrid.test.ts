import { countNumInGrid } from './countNumInGrid';

describe('countNumInGrid function', () => {
  it('should work', () => {
    const actual = countNumInGrid(6, 12);
    expect(actual).toBe(4);
  });
});
