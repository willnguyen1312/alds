/*
Given an array of strictly the characters 'R', 'G', and 'B',
segregate the values of the array so that all the Rs come first,
the Gs come second, and the Bs come last.
You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'],
it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

const colorMap = {
  R: 0,
  G: 1,
  B: 2,
  0: 'R',
  1: 'G',
  2: 'B',
};

function compare(first: string, second: string): number {
  return colorMap[first] - colorMap[second];
}

export function redGreenBlue(strs: string[]): string[] {
  const result = strs.slice();
  const mid = 'G';
  //   red index
  let i = 0;
  //   green index
  let j = 0;
  //   blue index
  let n = result.length - 1;

  while (j <= n) {
    const comparedResult = compare(result[j], mid);
    if (comparedResult < 0) {
      [result[i], result[j]] = [result[j], result[i]];
      i++;
      j++;
    } else if (comparedResult > 0) {
      [result[n], result[j]] = [result[j], result[n]];
      n--;
    } else {
      j++;
    }
  }

  return result;
}

export function redGreenBlueCountingSort(str: string[]): string[] {
  const counts: number[] = [];
  for (const item of str) {
    counts[colorMap[item]] = counts[colorMap[item]]
      ? counts[colorMap[item]] + 1
      : 1;
  }

  let numItemsBefore = 0;
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    if (count) {
      counts[i] = numItemsBefore;
      numItemsBefore += count;
    }
  }

  const result = new Array(str.length);

  for (const item of str) {
    result[counts[colorMap[item]]] = item;
    counts[colorMap[item]] += 1;
  }

  return result;
}
