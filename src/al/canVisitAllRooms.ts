//leetcode.com/problems/keys-and-rooms/discuss/1132893/Javascript-solution-faster-than-94-DFS-with-total-count.

// So the solution is basically a dfs traversal of the rooms, with the added step of keeping track of the 'total' rooms visited during the traversal. If the total number of rooms visited is equal to the length of the rooms array, then we have effectively visited all the rooms ad we return true.

// We can add a check in the beginning for the edge cases where the total number of rooms is only 1, or the zeroth room has no keys (rooms[0].length == 0)) in which case we should return the appropriate result.

function canVisitAllRooms(rooms: number[][]): boolean {
  function dfs(current: number[]) {
    current.forEach((node) => {
      if (!visited.has(node)) {
        visited.add(node);
        total++;
        dfs(rooms[node]);
      }
    });
  }

  const visited = new Set();
  visited.add(0);
  let total = 0;

  dfs(rooms[0]);
  return total == rooms.length - 1 ? true : false;
}
