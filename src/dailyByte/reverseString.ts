export function reverseString(s: string): string {
  const strArr = s.split('');
  let start = 0;
  let end = strArr.length - 1;

  for (let index = 0; index < Math.floor(strArr.length / 2); index++) {
    [strArr[end - index], strArr[start + index]] = [
      strArr[start + index],
      strArr[end - index],
    ];
  }

  return strArr.join('');
}
