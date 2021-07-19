import PropTypes from 'prop-types'
import Link from 'next/link'

import * as S from './styled'

const PostItem = ({
  slug,
  background,
  category,
  date,
  readingTime,
  title,
  description
}) => (
  <Link href={`/posts/${slug}`} passHref>
    <S.PostItemLink>
      <S.PostItemWrapper>
        <S.PostItemTag background={background}>{category}</S.PostItemTag>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} · {readingTime} min read
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  </Link>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem
