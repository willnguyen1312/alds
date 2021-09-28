import { makeBST } from './makeBST';

describe('makeBST function', () => {
  it('should work', () => {
    const actual = makeBST([1, 2, 3, 4, 5]);
    expect(actual).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 3,
  "left": BinaryTreeNode {
    "data": 1,
    "left": null,
    "right": BinaryTreeNode {
      "data": 2,
      "left": null,
      "right": null,
    },
  },
  "right": BinaryTreeNode {
    "data": 5,
    "left": BinaryTreeNode {
      "data": 4,
      "left": null,
      "right": null,
    },
    "right": BinaryTreeNode {
      "data": undefined,
      "left": null,
      "right": null,
    },
  },
}
`);
  });
});
