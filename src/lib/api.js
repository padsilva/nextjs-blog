import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import calcReadingTime from 'utils/calcReadingTime'

const postsDirectory = join(process.cwd(), 'posts')

export const getPostSlugs = () => fs.readdirSync(postsDirectory)

export const getPostBySlug = (slug) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const date = new Date(data.date).toLocaleString('pt', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
  const timestamp = data.date.toString()
  const readingTime = calcReadingTime(content)

  return { slug: realSlug, ...data, date, timestamp, content, readingTime }
}

export const getAllPosts = () => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.timestamp) > new Date(post2.timestamp) ? -1 : 1
    )
  return posts
}
