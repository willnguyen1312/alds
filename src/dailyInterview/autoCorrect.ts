export const autocorrect = (input: string) => {
  return input
    .replace(/(?<!\w)u(?!\w)/gi, (match) => {
      return match.replace(/u/gi, "your client")
    })
    .replace(/(?<!\w)(you+)(?!\w)/gi, (match) => {
      return match.replace(/you+/gi, "your client")
    })
}
