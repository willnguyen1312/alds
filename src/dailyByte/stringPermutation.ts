/*
This question is asked by Amazon

Given a string s consisting of only letters and digits,
where we are allowed to transform any letter to uppercase or lowercase,
return a list containing all possible permutations of the string.

Ex: Given the following string…

S = "c7w2", return ["c7w2", "c7W2", "C7w2", "C7W2"]
*/

export function stringPermutation(str: string): string[] {
  const length = str.length;
  const result: string[] = [];

  function dfs(currentStr: string, index = 0) {
    if (index >= length) {
      result.push(currentStr);
      return;
    }

    const char = str[index];
    const isNumber = /\d/.test(char);

    if (isNumber) {
      dfs(currentStr + char, index + 1);
    } else {
      dfs(currentStr + char.toUpperCase(), index + 1);
      dfs(currentStr + char, index + 1);
    }
  }

  dfs('');

  return result;
}
