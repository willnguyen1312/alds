export function validPalindromeRecur(str: string, i: number = 0): boolean {
  const j = str.length - 1 - i;

  return i >= j ? true : str[i] === str[j] && validPalindromeRecur(str, i + 1);
}

export function validPalindrome(string: string): boolean {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }

  return true;
}
