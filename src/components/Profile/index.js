import Link from 'next/link'

import Avatar from 'components/Avatar'

import * as S from './styled'

const Profile = () => (
  <S.ProfileWrapper>
    <Link href="/" passHref>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          Paulo Silva
          <S.ProfilePosition>Software Developer</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
    </Link>
    <S.ProfileDescription>
      A blog about bikes, rides and other cool stuffs.
    </S.ProfileDescription>
  </S.ProfileWrapper>
)

export default Profile
