/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given 2 strings s and t, find and return all indexes in string s where t is an anagram.
*/

export function findAnagram(s2: string, s1: string): number[] {
  let map: Record<string, number> = {};
  let start = 0;
  let matched = 0;
  let res: number[] = [];

  for (const char of s1) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let end = 0; end < s2.length; end++) {
    let right = s2[end];

    if (right in map) {
      map[right]--;
      if (map[right] === 0) matched++;
    }

    if (matched === Object.keys(map).length) {
      res.push(start);
    }

    if (end >= s1.length - 1) {
      let left = s2[start];
      start++;
      if (left in map) {
        if (map[left] === 0) matched--;
        map[left]++;
      }
    }
  }

  return res;
}

export function findAnagram2(container: string, child: string): number[] {
  if (child.length > container.length) {
    return [];
  }

  const childMap = new Map();
  const containerMap = new Map();

  for (let idx = 0; idx < child.length; ++idx) {
    // O(m)
    childMap.set(child[idx], (childMap.get(child[idx]) || 0) + 1);
    containerMap.set(
      container[idx],
      (containerMap.get(container[idx]) || 0) + 1
    );
  }

  let start = 0;
  let end = child.length - 1;

  const result = [];

  while (end < container.length) {
    if (checkMapsEqual(childMap, containerMap)) {
      result.push(start);
    }

    if (containerMap.get(container[start]) > 1) {
      containerMap.set(
        container[start],
        containerMap.get(container[start]) - 1
      );
    } else {
      containerMap.delete(container[start]);
    }

    ++start;
    ++end;

    containerMap.set(
      container[end],
      (containerMap.get(container[end]) || 0) + 1
    );
  }

  return result;
}

function checkMapsEqual(
  fistMap: Map<string, number>,
  secondMap: Map<string, number>
): boolean {
  if (fistMap.size !== secondMap.size) {
    return false;
  }

  for (const key of fistMap.keys()) {
    if (fistMap.get(key) !== secondMap.get(key)) {
      return false;
    }
  }

  return true;
}
