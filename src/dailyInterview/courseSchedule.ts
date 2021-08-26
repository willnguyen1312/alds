//  Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have
// finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

export function courseSchedule(numCourses: number, prerequisites: number[][]): number[] {
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
