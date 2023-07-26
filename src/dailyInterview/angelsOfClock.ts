/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.
*/

export function angelsOfClock(hour: number, minute: number): number {
  const oneTwelfthPortion = 360 / 12
  const minutePortion = minute / 60
  const minuteAsHour = minutePortion * 12
  const diff = minutePortion * oneTwelfthPortion
  const range = Math.abs(hour - minuteAsHour)

  if (hour === 12) {
    hour = 0
  }

  if (hour >= minuteAsHour) {
    return range * oneTwelfthPortion + diff
  } else {
    return range * oneTwelfthPortion - diff
  }
}
