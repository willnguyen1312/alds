function checkLeapYear(year: number) {
  if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) {
    return true
  }

  return false
}

export function getDayOccurTime(year: number) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const results = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Sunday",
  ]

  const result = [52, 52, 52, 52, 52, 52, 52]

  let pos = -1

  const day = new Date(year, 0, 1).toString().split(" ")[0]

  for (let index = 0; index < 7; index++) {
    if (day === days[index]) {
      pos = index
    }
  }

  if (checkLeapYear(year)) {
    result[pos] += 1
    result[(pos + 1) % 7] += 1
  } else {
    result[pos] += 1
  }

  const max = Math.max(...result)

  return result
    .map((item) => (item === max ? item : undefined))
    .map((item, index) => {
      return item ? results[index] : undefined
    })
    .filter(Boolean)
}
