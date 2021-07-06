function isValid(s: string): boolean {
  const strArr = s.split('');
  const map = new Map<string, string>();
  map.set(')', '(');
  map.set(']', '[');
  map.set('}', '{');

  const stack = [];
  for (const ch of strArr) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      let pair = map.get(ch);
      if (stack.length === 0 || stack[stack.length - 1] !== pair) return false;
      else stack.pop();
    }
  }

  return stack.length === 0;
}
