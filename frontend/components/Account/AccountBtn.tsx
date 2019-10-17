import React from 'react'
import styled from 'styled-components'
import AccountMenu from './AccountMenu'
import IconBtn from '../Button/IconBtn'
// import { AnimatePresence } from 'framer-motion'

const Root = styled.div`
  width: 40px;
  height: 40px;
  background: transparent;
  position: relative;
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
      <IconBtn icon="user" />
      {isMenuOpen && <AccountMenu />}
    </Root>
  )
}
