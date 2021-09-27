class Trie {
  children: Record<string, Trie> = {};
  word: string | null = null;
  index: number | null = null;
  constructor() {}
}

export function generatePalindromePairs(words: string[]): number[][] {
  const root = new Trie();
  const res: number[][] = [];
  for (let i = 0; i < words.length; i++) {
    if (!words[i]) continue;
    buildTrie(root, words[i], i);
  }

  for (let i = 0; i < words.length; i++) {
    const isEmptyChar = !words[i];
    searchPrefix(words[i], root, res, i, isEmptyChar);
  }

  return res;
}

/**
    It will build the tree in reverse order
  **/
function buildTrie(root: Trie, word: string, index: number) {
  let node = root;
  for (let i = word.length - 1; i >= 0; i--) {
    const c = word[i];
    if (!node.children[c]) node.children[c] = new Trie();
    node = node.children[c];
  }
  node.word = word;
  node.index = index;
}

function searchPrefix(
  prefix: string,
  root: Trie,
  res: number[][],
  initialIndex: number,
  isEmptyChar: boolean
) {
  let node = root;
  for (let i = 0; i < prefix.length; i++) {
    const w = prefix[i];
    if (node.children[w] && node.children[w].word && i < prefix.length - 1) {
      // if the child node is already a word,
      // and we want to check if remainder of the prefix builds is a palindrome,
      // then we have a match
      checkIfMatch(
        node.children[w],
        res,
        prefix.substring(i + 1),
        initialIndex,
        isEmptyChar
      );
    } else if (!node.children[w]) {
      return res;
    }
    node = node.children[w];
  }
  // here we search for the past the entire prefix
  dfs(node, res, '', initialIndex, isEmptyChar);
  return res;
}

function dfs(
  node: Trie,
  res: number[][],
  str: string,
  initialIndex: number,
  isEmptyChar: boolean
) {
  checkIfMatch(node, res, str, initialIndex, isEmptyChar);
  for (let c in node.children) {
    const s = str + c;
    dfs(node.children[c], res, s, initialIndex, isEmptyChar);
  }
}

function checkIfMatch(
  node: Trie,
  res: number[][],
  str: string,
  initialIndex: number,
  isEmptyChar: boolean
) {
  if (node.word && isPalindrome(str) && node.index !== initialIndex) {
    pushIntoResults(initialIndex, node.index, res);
    if (isEmptyChar) {
      pushIntoResults(node.index, initialIndex, res);
    }
  }
}

function pushIntoResults(index1: number, index2: number, res: number[][]) {
  res.push([index1, index2]);
}

function isPalindrome(s: string) {
  let end = s.length - 1;
  for (let start = 0; start < s.length / 2; start++) {
    if (s[start] !== s[end]) return false;
    end--;
  }
  return true;
}
