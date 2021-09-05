/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a non-negative integer n, convert the integer to hexadecimal and return the result as a string.
Hexadecimal is a base 16 representation of a number, where the digits are 0123456789ABCDEF.
Do not use any builtin base conversion functions like hex.
*/

export function decimalToHex(n: number): string {
  const hexResult: string[] = [];

  while (n > 0) {
    const remainder = n % 16;

    // check if temp < 10
    if (remainder < 10) {
      hexResult.unshift(String.fromCharCode(remainder + '0'.charCodeAt(0)));
    } else {
      hexResult.unshift(
        String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0))
      );
    }

    n = Math.floor(n / 16);
  }

  return hexResult.join('');
}
