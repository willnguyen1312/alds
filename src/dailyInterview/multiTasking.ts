/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

We have a list of tasks to perform, with a cooldown period.
We can do multiple of these at the same time, but we cannot run the same task simultaneously.

Given a list of tasks, find how long it will take to complete the tasks in the order they are input.

tasks = [1, 1, 2, 1]
cooldown = 2
output: 7 (order is 1 _ _ 1 2 _ 1)
*/

export function multiTasking(tasks: number[], cooldown: number): number {
  if (cooldown <= 0) {
    return tasks.length;
  }

  const lastTimeTrack: Record<number, number> = {};
  let result = 0;
  let taskIndex = 0;

  while (taskIndex < tasks.length) {
    const task = tasks[taskIndex];
    const last = lastTimeTrack[task];

    if (last === undefined || result - last > cooldown) {
      lastTimeTrack[task] = result;
      taskIndex++;
    }

    result++;
  }

  return result;
}
