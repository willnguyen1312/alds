import { galtonBoard } from './galtonBoard';

describe('waysToTraverseAGrid function', () => {
  it('should work', () => {
    expect(galtonBoard(4, 3)).toBe(10);
  });
});
