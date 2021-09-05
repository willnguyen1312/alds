/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a phone number, return all valid words that can be created using that phone number.

For instance, given the phone number 364 
we can construct the words ['dog', 'fog'].
*/

export function phoneNumbersToWords(phoneNumber: string): string[] {
  const lettersMaps: Record<string, string[]> = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: [],
  };

  const validWords = ['dog', 'fish', 'cat', 'fog'];

  const lookup: Record<string, string> = Object.keys(lettersMaps).reduce(
    (acc, cur) => {
      lettersMaps[cur].forEach((char) => {
        if (phoneNumber.includes(cur)) {
          acc[char] = cur;
        }
      });

      return acc;
    },
    {}
  );

  return validWords.filter((word) => {
    return word.split('').every((char) => lookup[char]);
  });
}
