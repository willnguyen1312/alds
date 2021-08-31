/*
Hi, here's your problem today. This problem was recently asked by Google:

You are given a stream of numbers. Compute the median for each new element .

Eg. Given [2, 1, 4, 7, 2, 0, 5], the algorithm should output [2, 1.5, 2, 3.0, 2, 2, 2]
*/

export function runningMedian(arr: number[]): number[] {
  let med = arr[0];
  const result = [med];

  // max heap to store the smaller half elements
  let smaller = [];

  // min-heap to store the greater half elements
  let greater = [];

  smaller.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];

    // case1(left side heap has more elements)
    if (smaller.length > greater.length) {
      if (element < med) {
        smaller.sort(function (a, b) {
          return b - a;
        });

        greater.push(smaller.shift());
        smaller.push(element);
      } else {
        greater.push(element);
      }

      smaller.sort(function (a, b) {
        return b - a;
      });
      greater.sort(function (a, b) {
        return a - b;
      });

      med = (smaller[0] + greater[0]) / 2;
    } else if (smaller.length === greater.length) {
      if (element < med) {
        smaller.push(element);
        smaller.sort(function (a, b) {
          return b - a;
        });

        med = smaller[0];
      } else {
        greater.push(element);

        greater.sort(function (a, b) {
          return a - b;
        });
        med = greater[0];
      }
    } else {
      if (element > med) {
        greater.sort(function (a, b) {
          return a - b;
        });
        smaller.push(greater.shift());
        greater.push(element);
      } else {
        smaller.push(element);
      }
      smaller.sort(function (a, b) {
        return b - a;
      });

      med = (smaller[0] + greater[0]) / 2;
    }

    result.push(med);
  }

  return result;
}
