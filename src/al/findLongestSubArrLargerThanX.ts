// Write a function finding the longest sequence within the array so that:
// - The value of the sequence must be equal or greater than a certain number (param x)
//.  [1, 2, 3, 4, 4, 2], with x = 3 => longest streak = [3, 4, 4]
// - Ignore 0 value
//.  [1, 2, 3, 0, 4, 4, 2], with x = 3 => longest streak = [3, 0, 4, 4]
// - Streak must not contains more than 4 number zero (0) consecutively
//   [1, 2, 3, 0, 0, 0, 0, 4, 4, 2] with x = 3 => longest streak = [4, 4]
//   [1, 2, 3, 3, 4, 0, 0, 0, 0, 0, 4, 4, 2] with x = 3 => longest streak = [3, 3, 4]
//   [1, 2, 3, 4, 0, 2, 5, 6, 7, 8] with x = 3 => [3,4]

export function findLongestSubArrLargerThanX(
  arr: number[],
  x: number,
  maxConsecutiveZero = 4
): number[] {
  let start = -1;
  let end = -1;
  let maxStart = -1;
  let maxEnd = -1;
  let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x && start === -1) {
      countZero = 0;
      start = i;
    } else if (arr[i] === 0) {
      countZero++;
      if (countZero === maxConsecutiveZero) {
        let tempStart = start;
        let tempEnd = i - maxConsecutiveZero;
        if (tempEnd - tempStart > maxEnd - maxStart) {
          maxEnd = tempEnd;
          maxStart = tempStart;
        }
        start = -1;
        end = -1;
      }
    } else if (arr[i] < x && start !== -1) {
      end = i - 1;
    }
  }

  if (start !== -1 && end === -1) {
    end = arr.length - 1;
  }

  if (maxStart === -1 || end - start > maxEnd - maxStart) {
    maxStart = start;
  }

  if (maxEnd === -1 || end - start > maxEnd - maxStart) {
    maxEnd = end;
  }

  return arr.slice(maxStart, maxEnd + 1);
}
