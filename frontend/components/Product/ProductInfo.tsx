import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import RatingStar from './RatingStar'
import { Typography, Divider, Box } from '@material-ui/core'
import TextBtn from '../Button/TextBtn'
import { styles } from '../../styles/theme'
import SizeBtn from '../Button/SizeBtn'
import FeatherIcon from '../FeatherIcon'
import RoundedBtn from '../Button/RoundedBtn'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from '../Button/IconBtn'
import {
  increaseQuantityBy,
  clearFlyoutTimeout,
  openFlyout,
  closeFlyout,
  setFlyoutTimeout
} from '../../store/cart/action'

const Container = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
const RatingReview = styled.div`
  display: flex;
  margin-top: 16px;
`
const Price = styled.p`
  font-family: ${styles.typography.button.fontFamily};
  font-size: 18px;
  color: ${styles.palette.text.primary};
`
const SizeSelect = styled.div`
  margin-bottom: 32px;
`

const ControlWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 32px;
`
const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-right: 8px;
  height: 36px;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 18px;
  border: 1px solid ${styles.palette.text.primary};
`
const Quantity = styled.p`
  font-family: ${styles.typography.button.fontFamily};
  font-size: 14px;
  margin: 0;
`
const QuantityControl = styled.button`
  width: 24px;
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
  &:first-child {
    margin-right: 8px;
  }
  &:last-child {
    margin-left: 8px;
  }
`

const Share = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
`
interface propsValue {
  data: any
}
export default function ProductInfo({ data }: propsValue) {
  const dispatch = useDispatch()
  const flyoutTimeout = useSelector((state: any) => state.cart.flyoutTimeout)
  const [sizeIndex, setSizeIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const sizes = data.sizes

  const updateQuanty = (delta: number) => {
    if (delta + quantity > 0) {
      setQuantity(quantity + delta)
    } else {
      setQuantity(1)
    }
  }
  const handleAddToCart = () => {
    if (flyoutTimeout !== undefined) {
      dispatch(clearFlyoutTimeout())
    }
    dispatch(increaseQuantityBy(sizes[sizeIndex].sku, quantity))
    dispatch(
      openFlyout({
        ...sizes[sizeIndex],
        quantity: quantity,
        name: data.name
      })
    )
    setAdded(true)
    const timeout = setTimeout(() => {
      dispatch(closeFlyout())
    }, 2000)
    setTimeout(() => setAdded(false), 2000)
    dispatch(setFlyoutTimeout(timeout))
  }
  return (
    <Container>
      <Typography variant='h4'>{data.name}</Typography>
      <RatingReview>
        <RatingStar rating={data.rating} />
        <TextBtn style={{ marginLeft: 8 }}>{data.reviews} reviews</TextBtn>
      </RatingReview>
      <Price>${sizes[sizeIndex].price}</Price>
      {sizes[sizeIndex].size !== '' && (
        <SizeSelect>
          <Typography
            variant='h6'
            style={{ textTransform: 'uppercase', marginBottom: 8 }}
          >
            SIZE:{' '}
            <span style={{ textTransform: 'none' }}>
              {sizes[sizeIndex].size}
            </span>
          </Typography>
          {data.sizes.map((s: any, i: number) => {
            return (
              <SizeBtn
                key={s + i}
                onClick={() => setSizeIndex(i)}
                isSelected={sizeIndex === i}
                style={{ marginRight: 8, marginBottom: 8 }}
              >
                {s.size}
              </SizeBtn>
            )
          })}
        </SizeSelect>
      )}
      <Typography
        variant='caption'
        style={{ textAlign: 'center', marginBottom: 16, marginTop: 32 }}
      >
        Free one-day shipping on orders over $45
      </Typography>
      <ControlWrap>
        <QuantityWrap>
          <QuantityControl onClick={() => updateQuanty(-1)}>
            <FeatherIcon icon='minus' />
          </QuantityControl>

          <Quantity>{quantity}</Quantity>
          <QuantityControl onClick={() => updateQuanty(1)}>
            <FeatherIcon icon='plus' />
          </QuantityControl>
        </QuantityWrap>
        <RoundedBtn
          onClick={() => !added && handleAddToCart()}
          style={{
            width: 144,
            backgroundColor: added
              ? styles.palette.secondary.main
              : styles.palette.primary.main
          }}
        >
          {added ? 'Added!' : 'Add to cart'}
        </RoundedBtn>
      </ControlWrap>
      <Divider />
      <Share>
        <Typography variant='h6' style={{ textTransform: 'uppercase' }}>
          Share
        </Typography>
        <Box width={24} />
        <a href='https://www.instagram.com/thepetalleaf/' target='_blank'>
          <IconBtn icon='instagram' />
        </a>
        <Box width={4} />
        <a href='https://www.facebook.com/thepetalleaf/' target='_blank'>
          <IconBtn icon='facebook' />
        </a>
      </Share>
    </Container>
  )
}
