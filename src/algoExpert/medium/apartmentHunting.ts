function apartmentHunting(blocks: Record<string, boolean>[], reqs: string[]) {
  const minDistancesFromBlocks = reqs.map((req) => getMinDistances(blocks, req));

  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks);

  return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getMinDistances(blocks: Record<string, boolean>[], req: string) {
  const minDistances: number[] = new Array(blocks.length);
  let closestReqIdx = Infinity;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = distanceBetween(i, closestReqIdx);
  }

  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestReqIdx = i;
    minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReqIdx));
  }

  return minDistances;
}

function getMaxDistancesAtBlocks(blocks: Record<string, boolean>[], minDistancesFromBlocks: number[][]) {
  const maxDistancesAtBlocks: number[] = new Array(blocks.length);

  for (let i = 0; i < blocks.length; i++) {
    const minDistancesAtBlock = minDistancesFromBlocks.map((distances) => distances[i]);
    maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
  }
  return maxDistancesAtBlocks;
}

function getIdxAtMinValue(array: number[]) {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }

  return idxAtMinValue;
}

function distanceBetween(a: number, b: number) {
  return Math.abs(a - b);
}
