function getRow(rowIndex: number): number[] {
  const res = [1];

  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let rec = getRow(rowIndex - 1);

  for (let i = 1; i < rowIndex; i++) {
    res[i] = rec[i - 1] + rec[i];
  }
  res.push(1);

  return res;
}
