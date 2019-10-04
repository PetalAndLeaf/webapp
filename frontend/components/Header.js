import React, { useContext } from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import IconBtn from './IconBtn'
import AppContext from '../context/AppContext'
import Router from 'next/router'
import Link from 'next/link'

const Container = styled.header`
  width: 100%;
  height: 80px;
  /* border-bottom: 1px solid ${styles.palette.divider}; */
  display: flex;
  align-items: center;
  background-color: rgba(256,256,256,0.9);
  padding-left: 48px;
  padding-right: 48px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`

const Logo = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
`
export default function Header({ config = { type: 'home' } }) {
  const feather = require('feather-icons')
  const { siteConfig } = useContext(AppContext)
  const { type } = config
  return (
    <Container>
      <div>
        {type !== 'home' && (
          <Link href="/">
            <Logo src="../static/logo.svg" />
          </Link>
        )}
      </div>
      <div>
        {siteConfig.isCheckoutAvailable && <IconBtn icon="shopping-bag" />}
        {type !== 'home' && (
          <IconBtn icon="x" onClick={() => Router.push('/')} />
        )}
      </div>
    </Container>
  )
}
