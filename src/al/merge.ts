export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  // let i = m - 1;
  // let j = n - 1;
  // let k = m + n - 1;

  // while (k >= 0) {
  //   if (j < 0 || (i >= 0 && nums1[i] > nums2[j])) nums1[k--] = nums1[i--];
  //   else nums1[k--] = nums2[j--];
  // }

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }

  while (n > 0) {
    nums1[m + n - 1] = nums2[n - 1];
    n--;
  }
}
