// https://leetcode.com/problems/all-oone-data-structure/
const getMinValueMap = (m: Map<string, number>) =>
  new Map([...m].sort((x, y) => x[1] - y[1]));
const getMaxValueMap = (m: Map<string, number>) =>
  new Map([...m].sort((x, y) => y[1] - x[1]));

export function AllOne() {
  let m: Map<string, number> = new Map();
  let preOp: 'start' | 'min' | 'max' | 'inc' | 'dec' = 'start';
  return { inc, dec, getMaxKey, getMinKey };
  function inc(k: string) {
    m.set(k, m.get(k) + 1 || 1);
    preOp = 'inc';
  }
  function dec(k: string) {
    let occ = m.get(k);
    occ == 1 ? m.delete(k) : m.set(k, occ - 1);
    preOp = 'dec';
  }
  function getMaxKey() {
    if (preOp !== 'max') m = getMaxValueMap(m);
    preOp = 'max';
    return m.keys().next().value || '';
  }
  function getMinKey() {
    if (preOp !== 'min') m = getMinValueMap(m);
    preOp = 'min';
    return m.keys().next().value || '';
  }
}
