import { TreeNode, flattenBST } from './flattenBST';

describe('flattenBST function', () => {
  it('should work', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    );

    expect(flattenBST(root)).toMatchInlineSnapshot(`
      TreeNode {
        "left": null,
        "right": TreeNode {
          "left": null,
          "right": TreeNode {
            "left": null,
            "right": TreeNode {
              "left": null,
              "right": TreeNode {
                "left": null,
                "right": undefined,
                "val": 3,
              },
              "val": 5,
            },
            "val": 4,
          },
          "val": 2,
        },
        "val": 1,
      }
    `);
  });
});
