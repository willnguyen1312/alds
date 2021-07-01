export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let counter = nums1.length - 1;
  let c1 = nums1.length - nums2.length - 1;
  let c2 = nums2.length - 1;

  while (c1 >= 0 && c2 >= 0 && counter >= 0) {
    let n1 = nums1[c1];
    let n2 = nums2[c2];
    if (n2 > n1) {
      nums1[counter] = n2;
      c2 -= 1;
    } else {
      nums1[counter] = n1;
      c1 -= 1;
    }
    counter -= 1;
  }

  while (c2 >= 0) {
    nums1[counter] = nums2[c2];
    c2 -= 1;
    counter -= 1;
  }

  while (c1 >= 0) {
    nums1[counter] = nums1[c1];
    c1 -= 1;
    counter -= 1;
  }
}
