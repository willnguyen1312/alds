import { phoneNumbersToWords } from './phoneNumbersToWords';

describe('phoneNumbersToWords function', () => {
  it('should work', () => {
    const result = phoneNumbersToWords('364');
    expect(result).toEqual(['dog', 'fog']);
  });
});
