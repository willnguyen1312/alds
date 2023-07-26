import { firstRecurringCharacter } from "./firstRecurringCharacter"

describe("firstRecurringCharacter", () => {
  it("should work", () => {
    expect(firstRecurringCharacter("qwertty")).toBe("t")
    expect(firstRecurringCharacter("qwerty")).toBe("")
  })
})
