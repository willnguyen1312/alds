import {
  TreeNode,
  bfs,
  dfsAddParent,
  dfsIter,
  dfsRecur,
  sampleTree,
} from "./funkyTree"

describe("funkyTree functions", () => {
  it("should work", () => {
    expect(bfs(sampleTree[0])).toMatchInlineSnapshot(`
      [
        "1",
        "1.1",
        "1.2",
        "1.3",
        "1.1.1",
        "1.3.1",
      ]
    `)

    expect(dfsIter(sampleTree[0])).toMatchInlineSnapshot(`
      [
        "1",
        "1.1",
        "1.1.1",
        "1.2",
        "1.3",
        "1.3.1",
      ]
    `)

    expect(dfsRecur(sampleTree[0])).toMatchInlineSnapshot(`
      [
        "1",
        "1.1",
        "1.1.1",
        "1.2",
        "1.3",
        "1.3.1",
      ]
    `)
  })
})
