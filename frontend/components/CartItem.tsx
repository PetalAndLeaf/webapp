import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import FeatherIcon from './FeatherIcon'
import { styles } from '../styles/theme'
import IconBtn from './IconBtn'
import { useDispatch } from 'react-redux'
import {
  decreaseQuantity,
  increaseQuantity,
  setQuantity
} from '../store/cart/action'
import { motion, Variants } from 'framer-motion'

const Root = styled(motion.li)`
  width: 100%;
  height: 96px;
  padding: 16px;
  display: flex;
  position: relative;
`
const RootVariants: Variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
}
const ImageWrap = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 16px;
  text-align: center;
  img {
    height: 64px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`
const InfoWrap = styled.div`
  flex: 1;
`
const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`
const Quantity = styled.p`
  font-family: ${styles.typography.button.fontFamily};
  font-size: 14px;
  margin: 0;
  margin-left: 8px;
  margin-right: 8px;
`
const QuantityControl = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
  svg {
    width: 12px;
    height: 12px;
  }
`

const Price = styled.p`
  position: absolute;
  font-family: ${styles.typography.button.fontFamily};
  font-size: 14px;
  margin: 0;
  right: 16px;
  bottom: 16px;
`

interface propsValue {
  data: any
}
export default function CartItem({ data }: propsValue) {
  const dispatch = useDispatch()
  return (
    <Root
      id={data.sku}
      variants={RootVariants}
      initial='hiddne'
      animate='visible'
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      positionTransition={true}
    >
      <ImageWrap>
        <img src='/static/cover-p26.png' alt='item image' />
      </ImageWrap>
      <InfoWrap>
        <Typography variant='h6'>{data.name}</Typography>
        <Typography variant='caption'>{data.size}</Typography>
        <QuantityWrap>
          <QuantityControl onClick={() => dispatch(decreaseQuantity(data.sku))}>
            <FeatherIcon icon='minus' />
          </QuantityControl>
          <Quantity>{data.quantity}</Quantity>
          <QuantityControl onClick={() => dispatch(increaseQuantity(data.sku))}>
            <FeatherIcon icon='plus' />
          </QuantityControl>
        </QuantityWrap>
      </InfoWrap>
      <Price>{`$${data.price * data.quantity}`}</Price>
      <IconBtn
        icon='delete'
        style={{ position: 'absolute', top: 8, right: 8 }}
        onClick={() => dispatch(setQuantity(data.sku, 0))}
      />
    </Root>
  )
}
