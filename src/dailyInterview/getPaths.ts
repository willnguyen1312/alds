export function getPaths(
  thing: Record<string, any>,
  predicate: (value: any) => boolean
) {
  const paths = [];
  getPathHelper(thing);

  function getPathHelper(thing: any, currentPath: string = '') {
    if (predicate(thing)) {
      paths.push(currentPath);
      return;
    }

    if (Array.isArray(thing)) {
      for (let i = 0; i < thing.length; i++) {
        getPathHelper(thing[i], currentPath + '.' + i);
      }
    } else if (thing === Object(thing)) {
      for (let key in thing) {
        getPathHelper(thing[key], currentPath + '.' + key);
      }
    }
  }

  return paths;
}
