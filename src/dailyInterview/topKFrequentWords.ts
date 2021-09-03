/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a non-empty list of words, return the k most frequent words.
The output should be sorted from highest to lowest frequency, and if two words have the same frequency, the word with lower alphabetical order comes first. Input will contain only lower-case letters.

Example:
Input: ["daily", "interview", "pro", "pro", 
"for", "daily", "pro", "problems"], k = 2
Output: ["pro", "daily"]
*/

export function topKFrequentWords(words: string[], target: number): string[] {
  const wordCount = words.reduce((acc, word) => {
    acc[word] = acc[word] + 1 || 1;
    return acc;
  }, {});

  const orderedWords = Object.keys(wordCount).sort((a, b) => {
    const count1 = wordCount[a];
    const count2 = wordCount[b];

    if (count1 === count2) {
      return a > b ? 1 : -1;
    } else {
      return count2 - count1;
    }
  });

  return orderedWords.slice(0, target);
}
