export function duplicateZeros(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element === 0 && index !== arr.length - 1) {
      for (let jndex = arr.length - 1; jndex > index + 1; jndex--) {
        arr[jndex] = arr[jndex - 1]
      }
      arr[index + 1] = 0
      index++
    }
  }
}
