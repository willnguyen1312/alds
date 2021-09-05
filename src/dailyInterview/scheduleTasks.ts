/*
Hi, here's your problem today. This problem was recently asked by Amazon:

A task is a some work to be done which can be assumed takes 1 unit of time.
Between the same type of tasks you must take at least n units of time before running the same tasks again.

Given a list of tasks (each task will be represented by a string),
and a positive integer n representing the time it takes to run the same task again, find the minimum amount of time needed to run all tasks.
*/

export function scheduleTasks(tasks: string[], coolDown: number) {
  const tasksCount: Map<string, number> = new Map();
  let maxTask: string;
  let maxTaskCount: number = 0;

  for (const task of tasks) {
    tasksCount.set(task, (tasksCount.get(task) || 0) + 1);

    const currentTaskCount = tasksCount.get(task);

    if (currentTaskCount > maxTaskCount) {
      maxTask = task;
      maxTaskCount = currentTaskCount;
    }
  }

  let idle = (maxTaskCount - 1) * coolDown;

  for (const [taskName, taskCount] of tasksCount) {
    if (taskName === maxTask) {
      continue;
    }

    if (taskCount === maxTaskCount) {
      idle -= taskCount - 1;
      continue;
    }

    idle -= taskCount;
  }

  if (idle <= 0) {
    return tasks.length;
  }

  return tasks.length + idle;
}
