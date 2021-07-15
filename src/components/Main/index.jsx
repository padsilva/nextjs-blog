import PropTypes from 'prop-types'
import Image from 'next/image'

import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'JavaScript, ReactJS, Next.js and Styled Components'
}) => (
  <>
    <S.Background>
      <Image
        alt="Anonymous developer"
        src="/coding.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </S.Background>
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  </>
)

Main.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Main
