export function anagramIndices(child: string, container: string): number[] {
  if (child.length > container.length) {
    return [];
  }

  const childMap = new Map();
  const containerMap = new Map();

  for (let idx = 0; idx < child.length; ++idx) {
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
