export function checkPalindrome(str: string) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !checkAlphaNumeric(str.charAt(left))) {
      left++;
    }
    while (left < right && !checkAlphaNumeric(str.charAt(right))) {
      right--;
    }

    if (str.charAt(left).toLowerCase() !== str.charAt(right).toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function checkAlphaNumeric(c: string) {
  return /^[a-zA-Z0-9]*$/.test(c);
}
