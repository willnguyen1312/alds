import { flightPrices } from "./flightPrices"

describe("flightPrices function", () => {
  it("should work", () => {
    const actual = flightPrices([
      [40, 30],
      [300, 200],
      [50, 50],
      [30, 60],
    ])
    expect(actual).toBe(310)
  })
})
