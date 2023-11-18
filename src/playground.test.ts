describe("playground", () => {
  it("should pass", async () => {
    async function play() {
      for (let index = 0; index < 3; index++) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        // console.log(index)
      }
    }

    await play()
  })
})
