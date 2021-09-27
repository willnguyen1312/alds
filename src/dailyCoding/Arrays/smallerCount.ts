class BST {
  left: BST;
  right: BST;
  value: number;
  size: number;
  constructor(value: number, size = 0) {
    this.value = value;
    this.size = size;
  }

  insert(value: number, size = 0) {
    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value, size + this.size + 1);
      } else {
        this.right = new BST(value);
        return this.size + size + 1;
      }
    } else {
      this.size++;
      if (this.left) {
        return this.left.insert(value, size);
      } else {
        this.left = new BST(value);
        return size;
      }
    }
  }
}

export function smallerCount(arr: number[]) {
  const bst = new BST(arr[arr.length - 1]);
  const result: number[] = new Array(arr.length);
  result[result.length - 1] = 0;

  for (let i = arr.length - 2; i >= 0; i--) {
    result[i] = bst.insert(arr[i]);
  }

  return result;
}
