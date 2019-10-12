import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { Typography } from '@material-ui/core'
import IconBtn from './IconBtn'
import { Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'
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
  width: 320px;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  padding: 32px;
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
export default function CartSidebar() {
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
      >
        <Typography variant="h4">Cart</Typography>
        <IconBtn
          icon="x"
          // onClick={() => setCartOpen && setCartOpen(false)}
          moreProps={{
            style: { position: 'absolute', right: 8, top: 8 }
          }}
        />
        <Elements>
          <CheckoutForm />
        </Elements>
      </Sidebar>
    </>
  )
}
