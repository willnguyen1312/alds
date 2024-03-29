import { sortCsvColumns } from "./sortCsvColumns"

describe("sortCsvColumns function", () => {
  it("should work", () => {
    sortCsvColumns(
      "Beth,Charles,Danielle,Adam,Eric\n17945,10091,10088,3907,10132\n2,12,13,48,11",
    )
    expect(
      sortCsvColumns(
        "Beth,Charles,Danielle,Adam,Eric\n17945,10091,10088,3907,10132\n2,12,13,48,11",
      ),
    ).toBe(
      "Adam,Beth,Charles,Danielle,Eric\n3907,17945,10091,10088,10132\n48,2,12,13,11",
    )
  })
})
