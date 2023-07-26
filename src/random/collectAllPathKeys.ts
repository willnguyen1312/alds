export function collectAllPathKeys(
  thing: any,
  predicate: (value: any) => boolean,
) {
  const paths = []
  collectAllPathKeysHelper(thing)

  function collectAllPathKeysHelper(thing: any): boolean {
    if (predicate(thing)) {
      return true
    }

    let result = false

    if (Array.isArray(thing)) {
      for (let i = 0; i < thing.length; i++) {
        paths.push(i)
        if (collectAllPathKeysHelper(thing[i])) {
          result = true
          continue
        }

        paths.pop()
      }
    } else if (typeof thing === "object") {
      for (const key in thing) {
        paths.push(key)
        if (collectAllPathKeysHelper(thing[key])) {
          result = true
          continue
        }
        paths.pop()
      }
    }

    return result
  }

  return paths
}
