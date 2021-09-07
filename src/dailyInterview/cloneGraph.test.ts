import { GraphNode, cloneGraph } from './cloneGraph';

describe('cloneGraph function', () => {
  it('should work', () => {
    const n5 = new GraphNode(5);
    const n4 = new GraphNode(4);
    const n3 = new GraphNode(3, [n4]);
    const n2 = new GraphNode(2);
    const n1 = new GraphNode(1, [n5]);
    n5.neighbors = [n3];
    n4.neighbors = [n3, n2];
    n2.neighbors = [n4];

    const actual = cloneGraph(n1);
    expect(actual).toMatchInlineSnapshot(`
GraphNode {
  "neighbors": Array [
    GraphNode {
      "neighbors": Array [
        GraphNode {
          "neighbors": Array [
            GraphNode {
              "neighbors": Array [
                [Circular],
                GraphNode {
                  "neighbors": Array [
                    [Circular],
                  ],
                  "val": 2,
                },
              ],
              "val": 4,
            },
          ],
          "val": 3,
        },
      ],
      "val": 5,
    },
  ],
  "val": 1,
}
`);
  });
});
