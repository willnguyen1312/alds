// https://www.tutorialspoint.com/validating-a-boggle-word-using-javascript
export const boggleWordValidator = (board: string[][] = [], guess = '') => {
  const numRows = board.length;
  const numCols = board[0].length;

  type QueueItem = {
    pos: { r: number; c: number };
    nextIndex: number;
    path: number[];
  };

  const queue = board.reduce((acc, row, i) => {
    row.forEach((x, j) => {
      if (x === guess[0]) {
        acc.push({
          pos: { r: i, c: j },
          nextIndex: 1,
          path: [numCols * i + j],
        });
      }
    });
    return acc;
  }, [] as QueueItem[]);

  const exploreWord = (obj, queue) => {
    const allMoves = [
      { r: obj.pos.r - 1, c: obj.pos.c },
      { r: obj.pos.r + 1, c: obj.pos.c },
      { r: obj.pos.r, c: obj.pos.c - 1 },
      { r: obj.pos.r, c: obj.pos.c + 1 },
      { r: obj.pos.r - 1, c: obj.pos.c - 1 },
      { r: obj.pos.r - 1, c: obj.pos.c + 1 },
      { r: obj.pos.r + 1, c: obj.pos.c - 1 },
      { r: obj.pos.r + 1, c: obj.pos.c + 1 },
    ];

    allMoves.forEach((o) => {
      const index = numCols * o.r + o.c;
      if (o.r >= 0 && o.r < numRows && o.c >= 0 && o.c < numCols) {
        if (
          board[o.r][o.c] === guess[obj.nextIndex] &&
          !obj.path.includes(index)
        ) {
          const cloneObj = JSON.parse(JSON.stringify(obj));
          cloneObj.pos = { r: o.r, c: o.c };
          cloneObj.nextIndex += 1;
          cloneObj.path.push(index);
          queue.push(cloneObj);
        }
      }
    });
  };

  while (queue.length > 0) {
    const obj = queue.shift();

    if (obj.nextIndex === guess.length) {
      return true;
    }
    exploreWord(obj, queue);
  }

  return false;
};
