import { vacuumCleaner } from "./vacuumCleaner"

describe("vacuumCleaner function", () => {
  it("should work", () => {
    expect(vacuumCleaner("URURD")).toBe(false)
    expect(vacuumCleaner("RUULLDRD")).toBe(true)
  })
})
