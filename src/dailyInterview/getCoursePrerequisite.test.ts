import { getCoursePrerequisite } from "./getCoursePrerequisite"

describe("getCoursePrerequisite function", () => {
  it("should work for the first case - happy case", () => {
    const courseMap = {
      CSC200: ["CSC100"],
      CSC100: [],
      CSC300: ["CSC100", "CSC200"],
    }

    expect(getCoursePrerequisite(courseMap)).toEqual([
      "CSC100",
      "CSC200",
      "CSC300",
    ])
  })

  it("should work for the second case - not existed course", () => {
    const courseMap = {
      CSC200: ["CSC500"],
      CSC100: [],
      CSC300: ["CSC100", "CSC200"],
    }

    expect(getCoursePrerequisite(courseMap)).toBeNull()
  })

  it("should work for the third case - cyclic dependency", () => {
    const courseMap = {
      CSC200: ["CSC500"],
      CSC100: ["CSC200"],
      CSC300: ["CSC100", "CSC200"],
    }

    expect(getCoursePrerequisite(courseMap)).toBeNull()
  })
})
