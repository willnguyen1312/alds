function minRewards(scores: number[]) {
  const rewards = scores.map((_) => 1);

  const localMinIdxs = getLocalMinIdxs(scores);

  for (const localMinIdx of localMinIdxs) {
    expandFromLocalMinIdx(localMinIdx, scores, rewards);
  }

  return rewards.reduce((a, b) => a + b);
}

function getLocalMinIdxs(array: number[]) {
  if (array.length === 1) return [0];
  const localMinIdxs: number[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] < array[i + 1]) localMinIdxs.push(i);
    if (i === array.length - 1 && array[i] < array[i - 1]) localMinIdxs.push(i);
    if (i === 0 || i === array.length - 1) continue;
    if (array[i] < array[i + 1] && array[i] < array[i - 1]) localMinIdxs.push(i);
  }
  return localMinIdxs;
}

function expandFromLocalMinIdx(localMinIdx: number, scores: number[], rewards: number[]) {
  let leftIdx = localMinIdx - 1;
  while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
    rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
    leftIdx--;
  }

  let rightIdx = localMinIdx + 1;
  while (rightIdx < scores.length && scores[rightIdx] > scores[rightIdx - 1]) {
    rewards[rightIdx] = rewards[rightIdx - 1] + 1;
    rightIdx++;
  }
}

function minRewards2(scores: number[]) {
  const rewards = scores.map((_) => 1);

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1;
  }

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }

  return rewards.reduce((a, b) => a + b);
}
