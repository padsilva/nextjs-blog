import PropTypes from 'prop-types'
import Link from 'next/link'

import * as S from './styled'

const Pagination = ({ current, total, prev, next }) => (
  <S.PaginationWrapper>
    {prev && (
      <Link href={prev} passHref>
        <S.PaginationLink className="previous">Previous</S.PaginationLink>
      </Link>
    )}
    {current} of {total}
    {next && (
      <Link href={next} passHref>
        <S.PaginationLink className="next">Next</S.PaginationLink>
      </Link>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  prev: PropTypes.string,
  next: PropTypes.string
}

export default Pagination
