import Image from 'next/image'
import profile from '../../../public/img/profile.jpg'

import * as S from './styled'

const Avatar = () => (
  <S.AvatarWrapper>
    <Image src={profile} alt="Paulo Silva avatar" placeholder="blur" />
  </S.AvatarWrapper>
)

export default Avatar
