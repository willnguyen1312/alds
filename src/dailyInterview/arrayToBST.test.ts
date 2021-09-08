import { arrayToBSTRecur, arrayToBSTIter } from './arrayToBST';

describe('arrayToBST function', () => {
  it('should work', () => {
    const actual = arrayToBSTRecur([-10, -3, 0, 5, 9]);
    expect(actual).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 0,
  "high": undefined,
  "left": BinaryTreeNode {
    "data": -10,
    "high": undefined,
    "left": null,
    "low": undefined,
    "right": BinaryTreeNode {
      "data": -3,
      "high": undefined,
      "left": null,
      "low": undefined,
      "right": null,
    },
  },
  "low": undefined,
  "right": BinaryTreeNode {
    "data": 9,
    "high": undefined,
    "left": BinaryTreeNode {
      "data": 5,
      "high": undefined,
      "left": null,
      "low": undefined,
      "right": null,
    },
    "low": undefined,
    "right": BinaryTreeNode {
      "data": undefined,
      "high": undefined,
      "left": null,
      "low": undefined,
      "right": null,
    },
  },
}
`);

    const actual2 = arrayToBSTIter([-10, -3, 0, 5, 9]);
    expect(actual2).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 0,
  "high": 5,
  "left": BinaryTreeNode {
    "data": -10,
    "high": 1,
    "left": undefined,
    "low": 0,
    "right": BinaryTreeNode {
      "data": -3,
      "high": 1,
      "left": undefined,
      "low": 1,
      "right": undefined,
    },
  },
  "low": 0,
  "right": BinaryTreeNode {
    "data": 9,
    "high": 5,
    "left": BinaryTreeNode {
      "data": 5,
      "high": 3,
      "left": undefined,
      "low": 3,
      "right": undefined,
    },
    "low": 3,
    "right": BinaryTreeNode {
      "data": undefined,
      "high": 5,
      "left": undefined,
      "low": 5,
      "right": undefined,
    },
  },
}
`);
  });
});
