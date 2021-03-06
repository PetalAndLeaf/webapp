import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { styles } from '../../styles/theme'
import FeatherIcon from '../FeatherIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../store/cart/action'
import { AnimatePresence } from 'framer-motion'
import ProductFlyout from '../Product/ProductFlyout'

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
  min-width: 20px;
  height: 20px;
  padding-left: 4px;
  padding-right: 4px;
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
  const productFlyout = useSelector((state: any) => state.cart.productFlyout)
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    const totalItems = items.reduce(
      (total: number, item: any) => item.quantity + total,
      0
    )
    setTotalItems(totalItems)
  }, [items])

  return (
    <Root>
      <BtnWrap
        onClick={() => {
          dispatch(toggleSidebar())
        }}
      >
        <FeatherIcon icon='shoppingbag' />
        {totalItems !== 0 && <CartNumber>{totalItems}</CartNumber>}
      </BtnWrap>
      <AnimatePresence>
        {productFlyout !== undefined && <ProductFlyout item={productFlyout} />}
      </AnimatePresence>
    </Root>
  )
}
