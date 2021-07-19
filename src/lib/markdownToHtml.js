import remark from 'remark'
import html from 'remark-html'
import emoji from 'remark-emoji'

export const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).use(emoji).process(markdown)
  return result.toString()
}
