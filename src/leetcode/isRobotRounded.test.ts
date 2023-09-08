// Example 1:

// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "G": move one step. Position: (0, 2). Direction: North.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
// "G": move one step. Position: (0, 1). Direction: South.
// "G": move one step. Position: (0, 0). Direction: South.
// Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
// Based on that, we return true.
// Example 2:

// Input: instructions = "GG"
// Output: false
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "G": move one step. Position: (0, 2). Direction: North.
// Repeating the instructions, keeps advancing in the north direction and does not go into cycles.
// Based on that, we return false.
// Example 3:

// Input: instructions = "GL"
// Output: true
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "L": turn 90 degrees anti-clockwise. Position: (0, 1). Direction: West.
// "G": move one step. Position: (-1, 1). Direction: West.
// "L": turn 90 degrees anti-clockwise. Position: (-1, 1). Direction: South.
// "G": move one step. Position: (-1, 0). Direction: South.
// "L": turn 90 degrees anti-clockwise. Position: (-1, 0). Direction: East.
// "G": move one step. Position: (0, 0). Direction: East.
// "L": turn 90 degrees anti-clockwise. Position: (0, 0). Direction: North.
// Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (-1, 1) --> (-1, 0) --> (0, 0).
// Based on that, we return true.

function isRobotBounded(instructions: string): boolean {
  let x = 0
  let y = 0
  let dir = 0

  for (const instruction of instructions) {
    if (instruction === "G") {
      if (dir === 0) {
        x -= 1
      } else if (dir === 1) {
        y += 1
      } else if (dir === 2) {
        x += 1
      } else if (dir === 3) {
        y -= 1
      }
    } else if (instruction === "L") {
      dir = (dir + 3) % 4
    } else if (instruction === "R") {
      dir = (dir + 1) % 4
    }
  }

  return (x === 0 && y === 0) || dir !== 0
}

describe("isRobotBounded", () => {
  test("Example 1", () => {
    const instructions = "GGLLGG"
    const expected = true
    const result = isRobotBounded(instructions)
    expect(result).toBe(expected)
  })
  test("Example 2", () => {
    const instructions = "GG"
    const expected = false
    const result = isRobotBounded(instructions)
    expect(result).toBe(expected)
  })
  test("Example 3", () => {
    const instructions = "GL"
    const expected = true
    const result = isRobotBounded(instructions)
    expect(result).toBe(expected)
  })
})
