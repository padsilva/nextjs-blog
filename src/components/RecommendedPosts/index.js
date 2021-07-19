import PropTypes from 'prop-types'
import Link from 'next/link'

import * as S from './styled'

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <Link href={`/posts/${previous.slug}`} passHref>
        <S.RecommendedLink className="previous">
          {previous.title}
        </S.RecommendedLink>
      </Link>
    )}
    {next && (
      <Link href={`/posts/${next.slug}`} passHref>
        <S.RecommendedLink className="next">{next.title}</S.RecommendedLink>
      </Link>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: PropTypes.object,
  previous: PropTypes.object
}

export default RecommendedPosts
