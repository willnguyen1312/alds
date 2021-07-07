function reverseString(s: string[]): void {
  let start = 0;
  let end = s.length - 1;

  for (let index = 0; index < Math.floor(s.length / 2); index++) {
    [s[end - index], s[start + index]] = [s[start + index], s[end - index]];
  }
}

let a = ['H', 'a', 'n', 'n', 'a', 'h'];

reverseString(a);

console.log(a);

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
