/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given 3 sorted lists, find the intersection of those 3 lists.
*/

export function intersectionOfLists(...lists: number[][]): number[] {
  return lists.reduce((acc, cur) => {
    const setCur = new Set(cur);
    const result = acc.filter((x) => setCur.has(x));
    return result;
  });
}
