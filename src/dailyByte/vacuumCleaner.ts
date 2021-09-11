export function vacuumCleaner(moves: string): boolean {
  let x = 0;
  let y = 0;

  const moveRobot = {
    L: () => x--,
    R: () => x++,
    U: () => y++,
    D: () => y--,
  };

  for (let i = 0; i < moves.length; i++) {
    moveRobot[moves[i]]();
  }

  return !x && !y;
}
