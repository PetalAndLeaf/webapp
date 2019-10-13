import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import IconBtn from './IconBtn'
import Router from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import CartSidebar from './CartSidebar'
import { AnimatePresence } from 'framer-motion'
import CartBtn from './CartBtn'
import TextBtn from './TextBtn'
import Dialog from '@material-ui/core/Dialog'
import Login from './Login'

const Container = styled.header`
  width: 100%;
  height: 96px;
  /* border-bottom: 1px solid ${styles.palette.divider}; */
  display: flex;
  align-items: center;
  background-color: rgba(256,256,256,1);
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

const Controls = styled.div`
  display: flex;
  align-items: center;

  *:not(:last-child) {
    margin-right: 16px;
  }
`
interface propsValue {
  type: string
}
export default function Header({ type }: propsValue) {
  const isSidebarOpen = useSelector((state: any) => state.cart.isSidebarOpen)
  const siteConfig = useSelector((state: any) => state.content.siteConfig)
  const isLoggedin = useSelector((state: any) => state.user.isLoggedin)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  useEffect(() => {
    if (isLoggedin && isLoginOpen) {
      setIsLoginOpen(false)
    }
  }, [isLoggedin])

  return (
    <Container>
      <div>
        {type !== 'home' && (
          <Link href="/">
            <Logo src="../static/logo.svg" />
          </Link>
        )}
      </div>
      <Controls>
        {isLoggedin ? (
          <IconBtn icon="user" />
        ) : (
          <TextBtn onClick={() => setIsLoginOpen(true)}>Log in</TextBtn>
        )}

        {siteConfig.isCheckoutAvailable && <CartBtn />}
        {type !== 'home' && (
          <IconBtn icon="x" onClick={() => Router.push('/')} />
        )}
      </Controls>
      <AnimatePresence>
        {isSidebarOpen && <CartSidebar key="CartSidebar" />}
        <Dialog open={isLoginOpen} key="loginDialog">
          <Login />
          <IconBtn
            icon="x"
            onClick={() => setIsLoginOpen(false)}
            style={{ position: 'absolute', right: 8, top: 8 }}
          />
        </Dialog>
      </AnimatePresence>
    </Container>
  )
}
