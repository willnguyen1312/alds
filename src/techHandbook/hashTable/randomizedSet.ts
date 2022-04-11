// https://leetcode.com/problems/insert-delete-getrandom-o1/
class RandomizedSet {
  set: Set<number> = new Set();
  constructor() {}

  insert = (val: number): boolean => {
    if (this.set.has(val)) {
      return false;
    }

    this.set.add(val);
    return true;
  };

  remove = (val: number): boolean => {
    return this.set.delete(val);
  };

  getRandom = (): number => {
    return [...this.set.values()][Math.floor(Math.random() * this.set.size)];
  };
}
