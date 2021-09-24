import { readFile } from './readFile';

describe('readFile function', () => {
  it('should work', () => {
    const readFile7 = readFile(7);
    const getter = readFile7('Hello world');
    expect(getter()).toBe('Hello w');
    expect(getter()).toBe('orld');
    expect(getter()).toBe('');
  });
});
