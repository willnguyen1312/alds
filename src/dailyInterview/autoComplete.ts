/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Implement auto-completion. Given a large set of words (for instance 1,000,000 words)
and then a single word prefix, find all words that it can complete to.
*/

export class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isWord: boolean;

  constructor(public char?: string) {}

  insert(word: string) {
    const firstChar = word[0];
    let child = this.children.get(firstChar);

    if (!child) {
      child = new TrieNode(firstChar);
      this.children.set(firstChar, child);
    }

    if (word.length > 1) {
      child.insert(word.slice(1));
    } else {
      child.isWord = true;
    }
  }
}

export class Trie {
  root: TrieNode = new TrieNode();
  constructor(public words: string[]) {
    for (const word of words) {
      this.root.insert(word);
    }
  }

  find(prefix: string, exact: boolean = false) {
    let lastNode = this.root;

    for (const char of prefix) {
      lastNode = lastNode.children.get(char);
      if (!lastNode) {
        return false;
      }
    }

    return !exact || lastNode.isWord;
  }

  suggestHelper(root: TrieNode, list: string[], str: string) {
    if (root.isWord) {
      list.push(str);
    }

    if (!root.children.size) {
      return;
    }

    for (const child of root.children.values()) {
      this.suggestHelper(child, list, str + child.char);
    }
  }

  suggest(prefix: string) {
    const result: string[] = [];
    let lastNode = this.root;
    let str = '';

    for (const char of prefix) {
      lastNode = lastNode.children.get(char);
      if (!lastNode) {
        return [];
      }
      str += char;
    }

    this.suggestHelper(lastNode, result, str);
    return result;
  }
}
