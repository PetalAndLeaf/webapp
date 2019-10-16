import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { Typography } from '@material-ui/core'
import CartItem from '../Cart/CartItem'

const Root = styled(motion.div)`
  width: 320px;
  height: auto;
  max-height: 480px;
  background-color: #ffffff;
  box-shadow: 0 15px 46px -10px rgba(29, 28, 27, 0.3);
  position: absolute;
  right: -16px;
  top: 40px;
  z-index: 98;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
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
  height: 48px;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
`

interface propsValue {
  item: any
}
export default function ProductFlyout({ item }: propsValue) {
  return (
    <Root
      variants={rootVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header>
        <Typography variant='h5'>Added to your bag</Typography>
      </Header>
      <CartItem data={item} editable={false} />
    </Root>
  )
}
