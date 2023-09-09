// Reference https://myinterview.guru/leetcode-489-robot-room-cleaner-roomba-20d9b9a1713c

interface Robot {
  move(): boolean
  turnLeft(): void
  turnRight(): void
  clean(): void
}

class Solution {
  // A hashtable to keep track of whether a non-obstacle cell is visited or not.
  visited = new Set<string>()

  robot: Robot

  goBack() {
    // Changing robot's direction and moving to the previous cell
    this.robot.turnRight()
    this.robot.turnRight()
    this.robot.move()
    this.robot.turnRight()
    this.robot.turnRight()
  }

  backtrack(x: number, y: number, dir: number) {
    // Adding the current position to the visited
    this.visited.add(`${x},${y}`)

    // Cleaning the cell
    this.robot.clean()

    // Assigning numbers to the clockwise directions:
    // 0: 'up', 1: 'right', 2: 'down', 3: 'left'
    for (let i = 0; i < 4; i++) {
      // Initially hold the current X and Y
      let newX = x
      let newY = y

      // Specifying the new direction of the robot
      // We use mod 4 because we only have 4 directions
      const newDir = (dir + i) % 4

      // Checking the directions based on the direction formulas
      // 0: 'up', 1: 'right', 2: 'down', 3: 'left'
      if (newDir === 0) {
        newX -= 1
      } else if (newDir === 1) {
        newY += 1
      } else if (newDir === 2) {
        newX += 1
      } else if (newDir === 3) {
        newY -= 1
      }

      // Checks if the next cell is visited and
      // whether the robot can move to the next cell or not.
      // If true, backtrack and find an alternative path
      if (!this.visited.has(`${newX},${newY}`) && this.robot.move()) {
        // Recursively backtracking to find a new path for the robot
        this.backtrack(newX, newY, newDir)

        // If there is no empty cell, go back to the previous cell
        this.goBack()
      }

      // turn the robot in the clockwise direction
      this.robot.turnRight()
    }
  }

  cleanRoom(robot: Robot) {
    this.robot = robot
    this.backtrack(0, 0, 0)
  }
}
