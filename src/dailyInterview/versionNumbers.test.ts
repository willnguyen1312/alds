import { versionNumbers } from "./versionNumbers"

describe("versionNumbers function", () => {
  it("should work", () => {
    expect(versionNumbers("1.0", "1.0.0")).toBe(0)
    expect(versionNumbers("1.0.1", "1")).toBe(1)
    expect(versionNumbers("1.0.33", "1.0.27")).toBe(1)
    expect(versionNumbers("0.1", "1.1")).toBe(-1)
  })
})
