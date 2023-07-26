import { spreadsheetColumnTitle } from "./spreadsheetColumnTitle"

describe("spreadsheetColumnTitle function", () => {
  it("should work", () => {
    expect(spreadsheetColumnTitle(26)).toBe("Z")
    expect(spreadsheetColumnTitle(51)).toBe("AY")
    expect(spreadsheetColumnTitle(52)).toBe("AZ")
    expect(spreadsheetColumnTitle(676)).toBe("YZ")
    expect(spreadsheetColumnTitle(702)).toBe("ZZ")
    expect(spreadsheetColumnTitle(704)).toBe("AAB")
  })
})
