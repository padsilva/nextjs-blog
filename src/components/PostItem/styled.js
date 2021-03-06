import styled from 'styled-components'
import media from 'styled-media-query'

export const PostItemLink = styled.a`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${(props) => props.background || 'var(--highlight)'};
  border-radius: 50%;
  color: var(--postColor);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan('large')`
    border-radius: 50%;
    font-size: 1rem;
    min-height: 60px;
    min-width: 60px;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
