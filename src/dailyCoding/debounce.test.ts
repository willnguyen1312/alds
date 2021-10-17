import { debounce } from './debounce';

describe('debounce function', () => {
  it('should work', async () => {
    jest.useFakeTimers();
    let value = 0;
    const increment = () => {
      value++;
    };

    const debouncedIncrement = debounce(increment, 300);
    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();

    jest.runAllTimers();
    expect(value).toBe(1);

    jest.useRealTimers();
  });
});
