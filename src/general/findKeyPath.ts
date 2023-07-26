interface Params {
  obj: any
  valueMatch: any
  rootPath?: string
  paths?: string[]
}

export function findKeyPath1({
  obj,
  valueMatch,
  rootPath = "",
  paths = [],
}: Params) {
  if (Array.isArray(obj)) {
    obj.map((item, index) => {
      const currentPath = `${rootPath}.${index}`
      if (item === valueMatch) {
        paths.push(currentPath)
      } else {
        findKeyPath1({
          obj: item,
          valueMatch,
          rootPath: currentPath,
          paths,
        })
      }
    })
  } else if (typeof obj === "object") {
    Object.keys(obj).map((key) => {
      const currentPath = rootPath ? `${rootPath}.${key}` : key
      if (obj[key] === valueMatch) {
        paths.push(currentPath)
      } else {
        findKeyPath1({
          obj: obj[key],
          valueMatch,
          rootPath: currentPath,
          paths,
        })
      }
    })
  }
  return paths
}

export function findKeyPath2({ obj, valueMatch }: Params) {
  const paths = []
  const stack = [
    {
      obj,
      path: "",
    },
  ]

  while (stack.length) {
    const { obj: currentObj, path: rootPath } = stack.pop()
    if (Array.isArray(currentObj)) {
      for (let index = 0; index < currentObj.length; index++) {
        const element = currentObj[index]
        const currentPath = `${rootPath}.${index}`
        if (element === valueMatch) {
          paths.push(currentPath)
        } else {
          stack.push({
            obj: element,
            path: currentPath,
          })
        }
      }
    } else if (typeof currentObj === "object") {
      for (const key in currentObj) {
        const element = currentObj[key]
        const currentPath = rootPath ? `${rootPath}.${key}` : key
        if (element === valueMatch) {
          paths.push(currentPath)
        } else {
          stack.push({
            obj: element,
            path: currentPath,
          })
        }
      }
    }
  }

  return paths
}

export function findKeyPath3({ obj, valueMatch }: Params): string[] {
  const result: string[] = []

  function dfs(path: (string | number)[], currentNode: any) {
    if (Array.isArray(currentNode)) {
      for (let index = 0; index < currentNode.length; index++) {
        const element = currentNode[index]
        if (element === valueMatch) {
          result.push(path.concat(index).join("."))
          continue
        }

        // Backtracking
        path.push(index)
        dfs(path, element)
        path.pop()
      }
    } else if (typeof currentNode === "object") {
      for (const key in currentNode) {
        const element = currentNode[key]
        if (element === valueMatch) {
          result.push(path.concat(key).join("."))
          continue
        }

        // Backtracking
        path.push(key)
        dfs(path, element)
        path.pop()
      }
    }
  }

  dfs([], obj)
  return result
}
