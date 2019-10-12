import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { Typography } from '@material-ui/core'
import IconBtn from './IconBtn'
// import { styles } from '../styles/theme'
// import { Elements } from 'react-stripe-elements'
// import CheckoutForm from './CheckoutForm'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../store/cart/action'
import RoundedBtn from './RoundedBtn'
import CartItem from './CartItem'
// import CheckoutForm from "./CheckoutForm";

const Mask = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  z-index: 98;
`
const Sidebar = styled(motion.div)`
  width: 360px;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const sidebarVariants: Variants = {
  visible: {
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  hidden: {
    x: 320,
    transition: {
      duration: 0.3
    }
  }
}
const maskVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}
const Header = styled.div`
  height: 64px;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
`
const ItemList = styled.ul`
  overflow-y: scroll;
  padding-left: 0;
  margin: 0;
  flex: 1;
`

const Bottom = styled(motion.div)`
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -10px 24px -5px rgba(29, 28, 27, 0.12);
`
const SummaryList = styled.div`
  margin-bottom: 16px;
`
const SummaryListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`
export default function CartSidebar() {
  const [subtotal, setSubtotal] = useState(0)
  const dispatch = useDispatch()
  const items = useSelector((state: any) => state.cart.items)
  const isEmpty = items.length === 0

  useEffect(() => {
    console.log(items)
    const subtotal = items.reduce((value: number, item: any) => {
      console.log(item)
      const itemTotal = item.price * item.quantity
      return itemTotal + value
    }, 0)
    setSubtotal(subtotal)
  }, [items])

  return (
    <>
      <Mask
        variants={maskVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />
      <Sidebar
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{ justifyContent: `${isEmpty ? 'center' : 'space-between'}` }}
      >
        {isEmpty ? (
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
              <Typography variant="h4">Your bag ( {items.length} )</Typography>
            </Header>
            <ItemList>
              <AnimatePresence initial={false}>
                {items.map((item: any, i: number) => {
                  return <CartItem data={item} key={item + i} />
                })}
              </AnimatePresence>
            </ItemList>
            <Bottom layoutTransition={true}>
              <AnimatePresence>
                {/* {subtotal < 45 && ( */}
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    marginBottom: 16
                  }}
                >
                  <Typography
                    variant="caption"
                    style={{ textAlign: 'center', marginBottom: 16 }}
                  >
                    Free one-day shipping when your order is over $45
                  </Typography>
                </motion.div>
                {/* )} */}
              </AnimatePresence>

              <SummaryList>
                <SummaryListItem>
                  <Typography variant="h6">Subtotal</Typography>
                  <Typography
                    variant="button"
                    color="textSecondary"
                  >{`$${subtotal}`}</Typography>
                </SummaryListItem>
                <SummaryListItem>
                  <Typography variant="h6">Shipping</Typography>
                  <Typography variant="button" color="textSecondary">
                    {subtotal >= 45 ? '$0' : '$8'}
                  </Typography>
                </SummaryListItem>
                <SummaryListItem>
                  <Typography variant="h5">Total</Typography>
                  <Typography variant="button" style={{ fontSize: 18 }}>
                    {`$${subtotal + (subtotal >= 45 ? 0 : 8)}`}
                  </Typography>
                </SummaryListItem>
              </SummaryList>

              <RoundedBtn btype="large">Check out</RoundedBtn>
            </Bottom>
          </>
        )}

        <IconBtn
          icon="x"
          onClick={() => dispatch(toggleSidebar())}
          style={{ position: 'absolute', right: 8, top: 8 }}
        />
        {/* <Elements>
          <CheckoutForm />
        </Elements> */}
      </Sidebar>
    </>
  )
}
