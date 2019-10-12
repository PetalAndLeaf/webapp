import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { Typography } from '@material-ui/core'
import { styles } from '../styles/theme'
import RoundedBtn from './RoundedBtn'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Root = styled(motion.div)`
  width: 360px;
  height: auto;
  min-height: 160px;
  max-height: 480px;
  background-color: #ffffff;
  box-shadow: 0 15px 46px -10px rgba(29, 28, 27, 0.3);
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 98;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
`
const ItemList = styled.div`
  overflow-y: scroll;
`

const Bottom = styled.div`
  height: auto;
  border-top: 1px solid ${styles.palette.divider};
  padding: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default function CartFlyout() {
  const items = useSelector((state: any) => state.cart.items)
  const isEmpty = items.length === 0
  return (
    <Root
      variants={rootVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ justifyContent: `${isEmpty ? 'center' : 'space-between'}` }}
      //   onMouseLeave={() => dispatch(closeFlyout())}
    >
      {items.length === 0 ? (
        <Typography
          variant="body1"
          style={{
            textAlign: 'center'
          }}
        >
          Your bag is empty
        </Typography>
      ) : (
        <>
          <Header>
            <Typography variant="h5">Your bag</Typography>
          </Header>
          <ItemList>
            {items.map((item: any, i: number) => {
              return <CartItem data={item} key={item + i} />
            })}
          </ItemList>
          <Bottom>
            <Typography
              variant="caption"
              style={{ textAlign: 'center', marginBottom: 16 }}
            >
              Free one-day shipping when your order is over $45
            </Typography>
            <RoundedBtn btype="large">Continue to check out</RoundedBtn>
          </Bottom>
        </>
      )}
    </Root>
  )
}
