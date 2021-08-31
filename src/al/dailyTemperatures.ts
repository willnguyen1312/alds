const dailyTemperatures = function (temperatures: number[]) {
  let tempStack = [temperatures.length - 1];
  let daysUntilWarmer = new Array(temperatures.length);
  daysUntilWarmer.fill(0);

  for (let day = temperatures.length - 2; day >= 0; day--) {
    while (tempStack.length > 0 && temperatures[day] >= temperatures[tempStack[tempStack.length - 1]]) {
      tempStack.pop();
    }

    if (tempStack.length > 0) {
      daysUntilWarmer[day] = tempStack[tempStack.length - 1] - day;
    }
    tempStack.push(day);
  }

  return daysUntilWarmer;
};

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
