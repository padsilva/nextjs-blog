import PropTypes from 'prop-types'

import PostItem from 'components/PostItem'

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.slug}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
    background={hit.background}
    readingTime={hit.readingTime}
  />
)

Hit.propTypes = {
  hit: PropTypes.object.isRequired
}

export default Hit
