/*
This question is asked by Amazon. Given an integer array,
two players take turns picking the largest number from the ends of the array.
First, player one picks a number (either the left end or right end of the array)
followed by player two. Each time a player picks a particular numbers,
it is no longer available to the other player.
This picking continues until all numbers in the array have been chosen.
Once all numbers have been picked, the player with the larger score wins.
Return whether or not player one will win. 
Note: You may assume that each player is playing to win
(i.e. both players will always choose the maximum of the two numbers each turn)
and that there will always be a winner. 

Ex: Given the following integer array...

nums = [1, 2, 3], return true
Player one takes 3
Player two takes 2
Player one takes 1
3 + 1 > 2 and therefore player one wins
*/

export function whoWins(input: number[]): number {
  let turn: 'p1' | 'p2' = 'p1';
  let sum1 = 0;
  let sum2 = 0;

  let i = 0;
  let j = input.length - 1;

  while (i < j) {
    const leftEnd = input[i];
    const rightEnd = input[j];

    if (leftEnd > rightEnd) {
      if (turn === 'p1') {
        sum1 += leftEnd;
      } else {
        sum2 += leftEnd;
      }
      i++;
    } else {
      if (turn === 'p1') {
        sum1 += rightEnd;
      } else {
        sum2 += rightEnd;
      }
      j--;
    }

    turn = turn === 'p1' ? 'p2' : 'p1';
  }

  return sum1 > sum2 ? 1 : 2;
}
