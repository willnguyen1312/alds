import { reconstruct } from './reconstruct';

describe('reconstruct function', () => {
  it('should work', () => {
    const actual = reconstruct(['+', '+', '+', '-', '+']);
    console.log(actual);
  });
});
