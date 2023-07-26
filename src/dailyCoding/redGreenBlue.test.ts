import { redGreenBlue, redGreenBlueCountingSort } from "./redGreenBlue"

describe("redGreenBlue function", () => {
  it("should work", () => {
    const actual = redGreenBlue(["G", "B", "R", "R", "B", "R", "G"])
    expect(actual).toEqual(["R", "R", "R", "G", "G", "B", "B"])
    const actual2 = redGreenBlueCountingSort([
      "G",
      "B",
      "R",
      "R",
      "B",
      "R",
      "G",
    ])
    expect(actual2).toEqual(["R", "R", "R", "G", "G", "B", "B"])
  })
})
