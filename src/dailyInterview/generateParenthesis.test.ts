import { generateParenthesis } from './generateParenthesis';

describe('generateParenthesis function', () => {
  it('should work', () => {
    const actual = generateParenthesis(3);
    expect(actual).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
  });
});
