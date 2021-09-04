/*
Given a characters array tasks, representing the tasks a CPU needs to do,
where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period
between two same tasks (the same letter in the array), that is that
there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

 

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
*/

export function leastInterval(tasks: string[], n: number): number {
  const charMap = new Map();
  let maxCharCount = 0;
  let maxChar = tasks[0];

  for (let char of tasks) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
    if (charMap.get(char) > maxCharCount) {
      maxCharCount = charMap.get(char);
      maxChar = char;
    }
  }

  let idleCount = (maxCharCount - 1) * n;

  charMap.forEach((count, char) => {
    if (char === maxChar) return;
    if (count === maxCharCount) idleCount -= count - 1;
    else idleCount -= count;
  });

  if (idleCount <= 0) return tasks.length;
  return tasks.length + idleCount;
}
