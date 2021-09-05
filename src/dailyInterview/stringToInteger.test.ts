import { stringToInteger } from './stringToInteger';

describe('stringToInteger function', () => {
  it('should work', () => {
    expect(stringToInteger('-401')).toBe(-401);
    expect(stringToInteger('401')).toBe(401);
  });
});
