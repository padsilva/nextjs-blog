import styled from 'styled-components'
import media from 'styled-media-query'

export const AvatarWrapper = styled.div`
  height: 7rem;
  width: 7rem;
  margin: auto;

  > div {
    border-radius: 50%;
  }

  ${media.lessThan('large')`
    height: 2.3rem;
    width: 2.3rem;
  `}
`
