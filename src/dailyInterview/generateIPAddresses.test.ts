import { generateIPAddresses } from "./generateIPAddresses"

describe("generateIPAddresses function", () => {
  it("should work", () => {
    expect(generateIPAddresses("1592551013")).toEqual([
      "159.255.10.13",
      "159.255.101.3",
    ])
    expect(generateIPAddresses("25525511135")).toEqual([
      "255.255.11.135",
      "255.255.111.35",
    ])
  })
})
