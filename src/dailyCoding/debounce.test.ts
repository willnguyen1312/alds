import { debounce } from "./debounce"

describe("debounce function", () => {
  it("should work", async () => {
    vi.useFakeTimers()
    let value = 0
    const increment = () => {
      value++
    }

    const debouncedIncrement = debounce(increment, 1_000_000)
    debouncedIncrement()
    debouncedIncrement()
    debouncedIncrement()

    vi.runAllTimers()
    expect(value).toBe(1)

    vi.useRealTimers()
  })
})
