export function findPair(numbs: number[], k: number) {
  const visited = {};

  for (const numb of numbs) {
    if (visited[k - numb]) {
      return true;
    }

    visited[numb] = true;
  }

  return false;
}
