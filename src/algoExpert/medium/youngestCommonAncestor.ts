class AncestralTree {
  name: string = ""
  ancestor: any
  constructor(name: string) {
    this.name = name
  }
}

// O(d) time | O(1) space - where d is the depth (height) of the ancestral tree
function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor)
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor)
  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo,
    )
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne,
    )
  }
}

function getDescendantDepth(
  descendant: AncestralTree,
  topAncestor: AncestralTree,
) {
  let depth = 0
  while (descendant !== topAncestor) {
    depth++
    descendant = descendant.ancestor
  }
  return depth
}

function backtrackAncestralTree(
  lowerDescendant: AncestralTree,
  higherDescendant: AncestralTree,
  diff: number,
) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor
    diff--
  }

  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor
    higherDescendant = higherDescendant.ancestor
  }

  return lowerDescendant
}
