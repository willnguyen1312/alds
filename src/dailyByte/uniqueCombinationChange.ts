/*
This question is asked by Apple. Given a list of positive numbers
without duplicates and a target number, find all unique combinations
of the numbers that sum to the target. Note: You may use the same number more than once.

Ex: Given the following numbers and target…

numbers = [2,4,6,3], target = 6,
return [
    [2,2,2],
    [2,4],
    [3,3],
    [6]
]
*/

export function uniqueCombinationChange(
  candidates: number[],
  target: number
): number[][] {
  const res: number[][] = [];

  function collect(
    arr: number[],
    index: number,
    target: number,
    list: number[] = []
  ) {
    if (target < 0 || index >= arr.length) {
      return;
    }

    if (target === 0) {
      res.push(list.slice());
      return;
    }

    for (let i = index; i < arr.length; i++) {
      if (target >= arr[i]) {
        list.push(arr[i]);
        collect(arr, i, target - arr[i], list);
        list.pop();
      }
    }
  }

  collect(candidates, 0, target);

  return res;
}
