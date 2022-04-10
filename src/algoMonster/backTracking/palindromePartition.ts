export function palindromePartition(str: string): string[][] {
  const result: string[][] = [];
  const length = str.length;

  function checkPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
  }

  function dfs(start: number, path: string[] = []) {
    if (start === length) {
      result.push(path);
      return;
    }

    for (let index = start + 1; index < length + 1; index++) {
      const prefix = str.slice(start, index);

      if (checkPalindrome(prefix)) {
        dfs(index, path.concat(prefix));
      }
    }
  }

  dfs(0, []);

  return result;
}
