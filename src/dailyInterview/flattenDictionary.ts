/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a nested dictionary, flatten the dictionary, where nested dictionary keys
can be represented through dot notation.

Example:
Input: {
  'a': 1,
  'b': {
    'c': 2,
    'd': {
      'e': 3
    }
  }
}
Output: {
  'a': 1,
  'b.c': 2,
  'b.d.e': 3
}
You can assume there will be no arrays, and all keys will be strings.
*/

type FlattenDictionaryArg = {
  [key: string]: number | FlattenDictionaryArg
}

export function flattenDictionary(obj: FlattenDictionaryArg) {
  const result: Record<string, any> = {}

  function collect(thing: any, currentPath = "") {
    if (thing !== Object(thing) && currentPath) {
      result[currentPath] = thing
      return
    }

    for (const key in thing) {
      if (Object.prototype.hasOwnProperty.call(thing, key)) {
        const element = thing[key]
        collect(element, currentPath ? currentPath + "." + key : key)
      }
    }
  }

  collect(obj)

  return result
}
