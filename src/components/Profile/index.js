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
      A blog developed under the Udemy course{' '}
      <S.ProfileLink
        href="https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/"
        target="_blank"
        rel="noopener"
      >
        <u>Gatsby: Crie um site PWA com React, GraphQL e Netlify CMS</u>
      </S.ProfileLink>
    </S.ProfileDescription>
  </S.ProfileWrapper>
)

export default Profile
