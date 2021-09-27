export function products(numbs: number[]): number[] {
  const result: number[] = numbs.slice().fill(1);

  for (let index = 1; index < result.length; index++) {
    result[index] = numbs[index - 1] * result[index - 1];
  }

  let right = 1;
  for (let index = result.length - 1; index >= 0; index--) {
    result[index] = right * result[index];
    right *= numbs[index];
  }

  return result;
}
