import PropTypes from 'prop-types'

import MenuBar from 'components/MenuBar'
import Sidebar from 'components/Sidebar'

import * as S from './styled'

const Base = ({ children }) => (
  <S.LayoutWrapper>
    <Sidebar />

    <S.LayoutMain>{children}</S.LayoutMain>

    <MenuBar />
  </S.LayoutWrapper>
)

Base.propTypes = {
  children: PropTypes.node.isRequired
}

export default Base
