/*
This question is asked by Amazon. Given two strings representing sentences,
return the words that are not common to both strings
(i.e. the words that only appear in one of the sentences).
You may assume that each sentence is a sequence of words (without punctuation)
correctly separated using space characters. 

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
*/

export function uncommonWords(first: string, second: string): string[] {
  const firstArr = first.split(" ")
  const secondArr = second.split(" ")

  const firstSet = new Set(firstArr)
  const secondSet = new Set(secondArr)
  const result: string[] = []

  for (const word of firstArr) {
    if (!secondSet.has(word)) {
      result.push(word)
    }
  }

  for (const word of secondArr) {
    if (!firstSet.has(word)) {
      result.push(word)
    }
  }

  return result
}
