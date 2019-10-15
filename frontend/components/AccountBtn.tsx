import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import FeatherIcon from './FeatherIcon'
import AccountMenu from './AccountMenu'
import { AnimatePresence } from 'framer-motion'

const Root = styled.div`
  width: 40px;
  height: 40px;
  background: transparent;
  position: relative;
`
const BtnWrap = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  svg {
    transition: color 0.2s ease-in-out;
  }
  &:hover svg {
    color: ${styles.palette.primary.main};
  }
`

export default function AccountBtn() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleMouseEnter = () => {
    setIsMenuOpen(true)
  }
  const handleMouseLeave = () => {
    setIsMenuOpen(false)
  }
  return (
    <Root onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <BtnWrap>
        <FeatherIcon icon="user" />
      </BtnWrap>
      <AnimatePresence>{isMenuOpen && <AccountMenu />}</AnimatePresence>
    </Root>
  )
}
