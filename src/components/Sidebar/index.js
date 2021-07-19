import MenuLinks from 'components/MenuLinks'
import Profile from 'components/Profile'
import SocialLinks from 'components/SocialLinks'

import * as S from './styled'

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />

    <SocialLinks />

    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
