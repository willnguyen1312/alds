/*
Hi, here's your problem today. This problem was recently asked by Google:

You are given a hash table where the key is a course code,
and the value is a list of all the course codes that are prerequisites for the key.
Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.

Example:
{
  'CSC300': ['CSC100', 'CSC200'], 
  'CSC200': ['CSC100'], 
  'CSC100': []
}

This input should return the order that we need to take these courses:
 ['CSC100', 'CSC200', 'CSC300']
 */

export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const seen: Set<number> = new Set();
  const seeing: Set<number> = new Set();

  const adj = [...Array(numCourses)].map((_) => []);

  for (const [a, b] of prerequisites) {
    adj[a].push(b);
  }

  for (let v = 0; v < numCourses; v++) {
    if (!dfs(v)) return [];
  }

  return [...seen];

  function dfs(v: number) {
    if (seen.has(v)) return true;
    if (seeing.has(v)) return false;
    seeing.add(v);
    for (const neighbour of adj[v]) {
      if (!dfs(neighbour)) return false;
    }
    seeing.delete(v);
    seen.add(v);
    return true;
  }
}
