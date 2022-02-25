export const sortCsvColumns = (csvData: string): string => {
  const rows = csvData.split('\n').map((row) => row.split(','));

  const rowLength = rows.length;
  const colLength = rows[0].length;

  const items: string[][] = [];

  for (let index = 0; index < colLength; index++) {
    const item: string[] = [];

    for (let jndex = 0; jndex < rowLength; jndex++) {
      item.push(rows[jndex][index]);
    }

    items.push(item);
  }

  const sortedItems = items.sort(
    (first, second) =>
      first[0].toLowerCase().charCodeAt(0) -
      second[0].toLowerCase().charCodeAt(0)
  );

  const resultArr: string[][] = [];

  for (let index = 0; index < sortedItems[0].length; index++) {
    const item: string[] = [];

    for (let jndex = 0; jndex < sortedItems.length; jndex++) {
      item.push(sortedItems[jndex][index]);
    }

    resultArr.push(item);
  }

  return resultArr.map((item) => item.join(',')).join('\n');
};
