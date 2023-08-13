class MyHashMap {
  map = {}
  put(key: number, value: number): void {
    this.map[key] = value
  }

  get(key: number): number {
    return this.map[key] ?? -1
  }

  remove(key: number): void {
    delete this.map[key]
  }
}

describe("MyHashMap", () => {
  it("should work as expecrted", () => {
    const hashMap = new MyHashMap()
    hashMap.put(1, 1)
    hashMap.put(2, 2)
    expect(hashMap.get(1)).toEqual(1)
    expect(hashMap.get(3)).toEqual(-1)
    hashMap.put(2, 1)
    expect(hashMap.get(2)).toEqual(1)
    hashMap.remove(2)
    expect(hashMap.get(2)).toEqual(-1)
  })
})
