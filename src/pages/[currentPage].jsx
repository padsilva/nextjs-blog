import { getAllPosts } from 'lib/api'

import Index, { getStaticProps } from './'

export default Index
export { getStaticProps }

export const getStaticPaths = async () => {
  const allPosts = getAllPosts()
  const numberOfPages = Math.ceil(allPosts.length / 4.0)

  const paths = Array(numberOfPages)
    .fill('')
    .map((_, index) => {
      return { params: { currentPage: (index + 1).toString() } }
    })

  return {
    fallback: false,
    paths: paths
  }
}
