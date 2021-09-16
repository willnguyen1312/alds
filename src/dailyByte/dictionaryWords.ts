/*
This question is asked by Amazon. Given a string s and a list of words representing a dictionary,
return whether or not the entirety of s can be segmented into dictionary words. 
Note: You may assume all characters in s and the dictionary are lowercase. 

Ex: Given the following string s and dictionary…

s = "thedailybyte", dictionary = ["the", "daily", "byte"], return true.

Ex: Given the following string s and dictionary…

s = "pizzaplanet", dictionary = ["plane", "pizza"], return false.
*/

export function dictionaryWords(str: string, wordDict: string[]): boolean {
  const table = new Array(str.length + 1).fill(false);
  table[0] = true;

  for (let i = 1; i <= str.length; i++) {
    for (let j = 0; j < i; j++) {
      if (table[j] && wordDict.includes(str.substring(j, i))) {
        table[i] = true;
        break;
      }
    }
  }

  return table[str.length];
}
