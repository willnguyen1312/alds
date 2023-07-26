/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a list of meetings that will happen during a day, find the minimum number of meeting rooms
that can fit all meetings.

Each meeting will be represented by a tuple of (start_time, end_time),
where both start_time and end_time will be represented by an integer to indicate the time.
start_time will be inclusive, and end_time will be exclusive,
meaning a meeting of (0, 10) and (10, 20) will only require 1 meeting room.
*/

export function numberOfMeetingRooms(meetings: number[][]): number {
  const rooms = meetings.sort((a, b) => a[0] - b[0])
  const reservedRooms: number[][] = []

  let current = rooms[0]

  for (let index = 1; index < rooms.length; index++) {
    const room = rooms[index]

    if (room[0] <= current[1]) {
      current[1] = Math.max(current[1], room[1])
    } else {
      reservedRooms.push(current)
      current = room
    }
  }

  reservedRooms.push(current)

  return reservedRooms.length
}
