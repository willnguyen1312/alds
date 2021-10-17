/*
This problem was asked by Facebook.

Given a function f, and N return a debounced f of N milliseconds.

That is, as long as the debounced f continues to be invoked,
f itself will not be called for N milliseconds.
*/

export function debounce(func: Function, time: number) {
  let debounceId;

  return (...args: any) => {
    if (debounceId) {
      clearTimeout(debounceId);
    }

    debounceId = setTimeout(() => {
      func(...args);
    }, time);
  };
}
