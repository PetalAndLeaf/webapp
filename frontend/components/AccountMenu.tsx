import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { Typography } from '@material-ui/core'
import { styles } from '../styles/theme'
import { useDispatch } from 'react-redux'
import { SignOutAction } from '../store/user/action'
import Link from 'next/link'
import Router from 'next/router'

const Root = styled(motion.div)`
  width: 200px;
  height: auto;
  background-color: #ffffff;
  box-shadow: 0 15px 46px -10px rgba(29, 28, 27, 0.3);
  position: absolute;
  right: 0;
  top: 32px;
  z-index: 98;
  border-radius: 8px;
`
const rootVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${styles.palette.divider};
  margin-right: 0;
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  font-family: ${styles.typography.button.fontFamily};
  font-weight: 400;
  color: ${styles.palette.text.primary};
  &:hover {
    color: ${styles.palette.text.secondary};
  }
`

export default function AccountMenu() {
  const dispatch = useDispatch()
  return (
    <Root
      variants={rootVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header>
        <Typography variant='h5'>Your account</Typography>
      </Header>
      <Link href='/account/profile'>
        <MenuItem>Account</MenuItem>
      </Link>
      <MenuItem
        onClick={() => {
          dispatch(SignOutAction())
          Router.push('/')
        }}
      >
        Log out
      </MenuItem>
    </Root>
  )
}
