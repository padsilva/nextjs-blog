import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styled'

const links = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'About',
    url: '/about'
  }
]

const MenuLinks = () => {
  const { pathname } = useRouter()

  return (
    <S.MenuLinksWrapper>
      <S.MenuLinksList>
        {links.map((link, i) => (
          <Link href={link.url} passHref key={i}>
            <S.MenuLinksItem>
              <S.MenuLinksLink
                className={pathname === link.url ? 'active' : ''}
              >
                {link.label}
              </S.MenuLinksLink>
            </S.MenuLinksItem>
          </Link>
        ))}
      </S.MenuLinksList>
    </S.MenuLinksWrapper>
  )
}

export default MenuLinks
