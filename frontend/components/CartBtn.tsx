import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import FeatherIcon from './FeatherIcon'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleSidebar,
  openFlyout,
  closeFlyout,
  clearFlyoutTimeout
} from '../store/cart/action'
import { AnimatePresence } from 'framer-motion'
import CartFlyout from './CartFlyout'

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
const CartNumber = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background-color: ${styles.palette.primary.main};
  color: ${styles.palette.text.primary};
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  right: 2px;
  bottom: 2px;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-weight: 700;
`

export default function CartBtn() {
  const dispatch = useDispatch()
  const items = useSelector((state: any) => state.cart.items)
  const isFlyoutOpen = useSelector((state: any) => state.cart.isFlyoutOpen)
  const flyoutTimeout = useSelector((state: any) => state.cart.flyoutTimeout)

  const handleMouseEnter = () => {
    if (flyoutTimeout !== undefined) {
      dispatch(clearFlyoutTimeout())
    }
    if (!isFlyoutOpen) {
      dispatch(openFlyout())
    }
  }
  return (
    <Root
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => dispatch(closeFlyout())}
    >
      <BtnWrap
        onClick={() => {
          dispatch(toggleSidebar())
        }}
      >
        <FeatherIcon icon="shoppingbag" />
        {items.length > 0 && <CartNumber>{items.length}</CartNumber>}
      </BtnWrap>
      <AnimatePresence>{isFlyoutOpen && <CartFlyout />}</AnimatePresence>
    </Root>
  )
}
