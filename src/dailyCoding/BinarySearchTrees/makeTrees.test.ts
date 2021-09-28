import { makeTrees } from './makeTrees';

describe('makeTrees function', () => {
  it('should work', () => {
    const actual = makeTrees(1, 3);
    expect(actual).toMatchInlineSnapshot(`
Array [
  BinaryTreeNode {
    "data": 1,
    "left": null,
    "right": BinaryTreeNode {
      "data": 2,
      "left": null,
      "right": BinaryTreeNode {
        "data": 3,
        "left": null,
        "right": null,
      },
    },
  },
  BinaryTreeNode {
    "data": 1,
    "left": null,
    "right": BinaryTreeNode {
      "data": 3,
      "left": BinaryTreeNode {
        "data": 2,
        "left": null,
        "right": null,
      },
      "right": null,
    },
  },
  BinaryTreeNode {
    "data": 2,
    "left": BinaryTreeNode {
      "data": 1,
      "left": null,
      "right": null,
    },
    "right": BinaryTreeNode {
      "data": 3,
      "left": null,
      "right": null,
    },
  },
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
    "right": null,
  },
  BinaryTreeNode {
    "data": 3,
    "left": BinaryTreeNode {
      "data": 2,
      "left": BinaryTreeNode {
        "data": 1,
        "left": null,
        "right": null,
      },
      "right": null,
    },
    "right": null,
  },
]
`);
  });
});
