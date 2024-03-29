/*
This question is asked by Apple. You are serving people in a lunch line
and need to ensure each person gets a “balanced” meal.
A balanced meal is a meal where there exists the same number of food items as drink items.
Someone is helping you prepare the meals and hands you food items (i.e. F)
or a drink items (D) in the order specified by the items string.
Return the maximum number of balanced meals you are able to create without being able to modify items. 
Note: items will only contain F and D characters.

Ex: Given the following items…

items = "FDFDFD", return 3
the first "FD" creates the first balanced meal.
the second "FD" creates the second balanced meal.
the third "FD" creates the third balanced meal.
Ex: Given the following items…

items = "FDFFDFDD", return 2
"FD" creates the first balanced meal.
"FFDFDD" creates the second balanced meal.
*/

export function foodBalance(items: string): number {
  let result = 0
  let foodCount = 0
  let drinkCount = 0

  for (const item of items) {
    if (item === "F") {
      foodCount++
    } else if (item === "D") {
      drinkCount++
    }

    if (foodCount === drinkCount && foodCount !== 0) {
      result++
      foodCount = 0
      drinkCount = 0
    }
  }

  return result
}
