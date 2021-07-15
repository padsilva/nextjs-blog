import styled from 'styled-components'

export const Wrapper = styled.main`
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`

export const Title = styled.h1`
  font-size: 4rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 200;
`
