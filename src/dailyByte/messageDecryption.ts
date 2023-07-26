/*
This question is asked by Microsoft. Given a message that is encoded using the following encryption method…

A -> 1
B -> 2
C -> 3
...
Z -> 26
Return the total number of ways it can be decoded. 
Note: ‘0’ has no mapping and a character following a ‘0’ also has no mapping (i.e. “03”) 


Ex: Given the following message…

message = "23", return 2.
The message can be decrypted as "BC" (i.e. 2 -> B, 3 -> C)
The message can also be decrypted as "W" (i.e. 23 -> W)
Ex: Given the following message…

message = "1234", return 3.
*/

export function messageDecryption(str: string): number {
  if (!str || str.length === 0 || str[0] === "0") {
    return 0
  }

  const table = new Array(str.length + 1).fill(0)
  table[0] = 1
  table[1] = 1

  for (let i = 1; i < str.length; i++) {
    if (Number(str.charAt(i)) >= 1) {
      table[i + 1] += table[i]
    }
    if (
      Number(str.substr(i - 1, 2)) <= 26 &&
      Number(str.substr(i - 1, 2)) >= 1 &&
      Number(str.charAt(i - 1)) >= 1
    ) {
      table[i + 1] += table[i - 1]
    }
  }

  return table[str.length]
}
