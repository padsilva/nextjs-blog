const dotenv = require('dotenv')
const algoliasearch = require('algoliasearch/lite')
const fs = require('fs')
const { join } = require('path')
const matter = require('gray-matter')

const postsDirectory = join(process.cwd(), 'posts')

const getPostSlugs = () => fs.readdirSync(postsDirectory)

const getPostBySlug = (slug) => {
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

  return { slug: realSlug, ...data, date, timestamp, content }
}

const getAllPosts = () => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.timestamp) > new Date(post2.timestamp) ? -1 : 1
    )
  return posts
}

const calcReadingTime = (content) => {
  const wpm = 300
  const words = content.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

const transformPostsToSearchObjects = (posts) =>
  posts.map((post) => ({
    objectID: post.slug,
    title: post.title,
    description: post.description,
    slug: post.slug,
    date: post.date,
    timestamp: parseInt((new Date(post.timestamp).getTime() / 1000).toFixed(0)),
    category: post.category,
    background: post.background,
    readingTime: calcReadingTime(post.content)
  }))

;(async function () {
  dotenv.config()

  try {
    const posts = getAllPosts()
    const transformed = transformPostsToSearchObjects(posts)

    console.log(transformed)

    if (posts.length > 0) {
      const client = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_ADMIN_KEY
      )

      const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)
      const algoliaResponse = await index.saveObjects(transformed)

      console.log(
        `🎉 Sucessfully added ${
          algoliaResponse.objectIDs.length
        } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
          '\n'
        )}`
      )
    }
  } catch (error) {
    console.log(error)
  }
})()
