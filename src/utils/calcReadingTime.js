export default (content) => {
  const wpm = 300
  const words = content.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}
