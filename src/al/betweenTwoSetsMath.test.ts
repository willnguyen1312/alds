import { betweenTwoSetsMath } from './betweenTwoSetsMath';

describe('betweenTwoSetsMath solution', () => {
  it('should work', () => {
    const a = [2, 6];
    const b = [24, 36];
    const expected = 2;

    expect(betweenTwoSetsMath(a, b)).toBe(expected);
  });
});
