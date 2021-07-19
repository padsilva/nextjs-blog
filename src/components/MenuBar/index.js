import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowToTop,
  Bulb,
  GridAlt,
  Home,
  ListUl,
  Search
} from 'styled-icons/boxicons-regular'

import * as S from './styled'

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
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
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }
          className={theme}
        >
          <Bulb />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="List / Grid View"
          onClick={() =>
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }
          className="display"
        >
          {isListMode ? <GridAlt /> : <ListUl />}
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
