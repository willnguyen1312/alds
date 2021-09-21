/*
You are given two lists of integers and an integer representing a process id to kill.
One of the lists represents a list of process ids and the other represents
a list of each of the processes’ corresponding (by index) parent ids.
When a process is killed, all of its children should also be killed.
Return a list of all the process ids that are killed as a result of killing the requested process. 

Ex: Given the following…

pid =  [2, 4, 3, 7]
ppid = [0, 2, 2, 3]
kill = 3
the tree of processes can be represented as follows:
           2
         /   \
        4     3
             /
            7
return [3, 7] as killing process 3 will also require killing its child (i.e. process 7).
*/

export function reapChildren(
  childIds: number[],
  parentIds: number[],
  target: number
): number[] {
  const result: number[] = [];
  const graph: Record<string, number[]> = parentIds.reduce(
    (acc, cur, index) => {
      if (acc[cur]) {
        acc[cur].push(childIds[index]);
      } else {
        acc[cur] = [childIds[index]];
      }
      return acc;
    },
    {}
  );

  let queue: number[] = [target];

  while (queue.length) {
    const toQueue: number[] = [];

    for (const numb of queue) {
      result.push(numb);

      if (graph[numb]) {
        toQueue.push(...graph[numb]);
      }
    }

    queue = toQueue;
  }

  return result;
}
