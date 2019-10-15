import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

const Container = styled(motion.div)`
  background-color: #ffffff;
  box-shadow: 0 15px 46px -10px rgba(29, 28, 27, 0.3);
  border-radius: 8px;
  padding: 32px;
`
const containerVariants: Variants = {
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

interface propsValue {
  children: JSX.Element[] | JSX.Element
  style?: any
}
export default function Card({ children, style }: propsValue) {
  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      {...style}
    >
      {children}
    </Container>
  )
}
