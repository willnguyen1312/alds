import { characterMap } from './characterMap';

describe('characterMap function', () => {
  it('should work', () => {
    expect(characterMap('abc', 'def')).toBe(true);
    expect(characterMap('aab', 'def')).toBe(false);
  });
});
