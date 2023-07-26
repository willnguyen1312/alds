import { distanceToRabbitHoles } from "./distanceToRabbitHoles"

describe("distanceToRabbitHoles function", () => {
  it("should work", () => {
    const grid = [
      [-1, 0, 1],
      [1, 1, -1],
      [1, 1, 0],
    ]

    distanceToRabbitHoles(grid)
    expect(grid).toEqual([
      [-1, 0, 1],
      [2, 1, -1],
      [2, 1, 0],
    ])
  })
})
