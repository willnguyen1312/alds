export function permutation(letters: string): string[] {
  const result: string[] = [];
  const used: boolean[] = [];

  function dfs(path: string[] = []) {
    if (path.length === letters.length) {
      result.push(path.join(''));
      return;
    }

    for (let index = 0; index < letters.length; index++) {
      const letter = letters[index];
      if (used[index]) {
        continue;
      }

      path.push(letter);
      used[index] = true;
      dfs(path);
      path.pop();
      used[index] = false;
    }
  }

  dfs();
  return result;
}
