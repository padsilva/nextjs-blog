import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowToTop, Bulb, Home, Search } from 'styled-icons/boxicons-regular'

import * as S from './styled'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <Link href="/" passHref>
          <S.MenuBarLink title="Home">
            <S.MenuBarItem>
              <Home />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </Link>
        <Link href="/search" passHref>
          <S.MenuBarLink title="Search">
            <S.MenuBarItem>
              <Search />
            </S.MenuBarItem>
          </S.MenuBarLink>
        </Link>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Light / Dark Mode"
          onClick={() =>
            window.__setPreferredTheme(theme === 'dark' ? 'light' : 'dark')
          }
          className={theme}
        >
          <Bulb />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Go to the Top"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' })
          }}
        >
          <ArrowToTop />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
