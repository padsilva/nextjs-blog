import PropTypes from 'prop-types'

import Base from 'components/Base'
import Pagination from 'components/Pagination'
import PostItem from 'components/PostItem'
import SEO from 'components/seo'

import { getAllPosts } from 'lib/api'

import * as S from 'components/Home/styled'

const Index = ({ allPosts, total, current, prev, next }) => (
  <Base>
    <SEO title="Home" />

    <S.PostList>
      {allPosts.map(
        (
          { background, category, date, title, description, slug, readingTime },
          i
        ) => (
          <PostItem
            key={i}
            slug={slug}
            background={background}
            category={category}
            date={date}
            readingTime={readingTime}
            title={title}
            description={description}
          />
        )
      )}
    </S.PostList>

    <Pagination current={current} total={total} prev={prev} next={next} />
  </Base>
)

export const getStaticProps = async (ctx) => {
  const posts = getAllPosts()
  const nPosts = posts.length
  const currentPage = ctx.params?.currentPage
  const currentPageNumber = +(currentPage || 1)
  const postsPerPage = 4
  const min = (currentPageNumber - 1) * postsPerPage
  const max = currentPageNumber * postsPerPage

  return {
    props: {
      allPosts: posts.slice(min, max),
      total: Math.ceil(nPosts / postsPerPage),
      current: currentPageNumber,
      prev:
        currentPageNumber === 1
          ? null
          : currentPageNumber === 2
          ? '/'
          : `/${currentPageNumber - 1}`,
      next: max < nPosts ? `/${currentPageNumber + 1}` : null
    }
  }
}

Index.propTypes = {
  allPosts: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  prev: PropTypes.string,
  next: PropTypes.string
}

export default Index
