import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import IconBtn from './Button/IconBtn'
import Router from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import CartSidebar from './Cart/CartSidebar'
import CartBtn from './Cart/CartBtn'
import TextBtn from './Button/TextBtn'
import Dialog from '@material-ui/core/Dialog'
import Login from './Login'
import AccountBtn from './Account/AccountBtn'
import { AnimatePresence } from 'framer-motion'
// import { SignOutAction } from '../store/user/action'

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

  > *:not(:last-child) {
    margin-right: 16px;
  }
`
interface propsValue {
  type: string
}
export default function Header({ type }: propsValue) {
  // const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state: any) => state.cart.isSidebarOpen)
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
            <Logo src="/static/images/logo.svg" />
          </Link>
        )}
      </div>
      <Controls>
        {isLoggedin ? (
          <AccountBtn />
        ) : (
          <TextBtn onClick={() => setIsLoginOpen(true)}>Sign up</TextBtn>
        )}

        <CartBtn />
        {type === 'product' && (
          <IconBtn icon="x" onClick={() => Router.push('/')} />
        )}
      </Controls>
      <AnimatePresence>
        {isSidebarOpen && <CartSidebar key="CartSidebar" />}
      </AnimatePresence>
      <Dialog open={isLoginOpen} key="loginDialog">
        <Login onSuccess={() => setIsLoginOpen(false)} initMode="signup" />
        <IconBtn
          icon="x"
          onClick={() => setIsLoginOpen(false)}
          style={{ position: 'absolute', right: 8, top: 8 }}
        />
      </Dialog>
    </Container>
  )
}
