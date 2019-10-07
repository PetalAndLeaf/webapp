import React, { useContext } from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import GlobalContext from '../context/GlobalContext'
import FeatherIcon from './FeatherIcon'

const Root = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
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
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  right: 2px;
  bottom: 2px;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-weight: 700;
`

export default function CartBtn() {
  const { cartItems, setCartOpen, cartOpen } = useContext(GlobalContext)
  return (
    <Root onClick={() => setCartOpen && setCartOpen(!cartOpen)}>
      <FeatherIcon icon="shoppingbag" />
      {cartItems && cartItems.length > 0 && (
        <CartNumber>{cartItems.length}</CartNumber>
      )}
    </Root>
  )
}
