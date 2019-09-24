import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Logo from './Logo'

const Container = styled(motion.div)`
  width: 100%;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`
export default function Hero() {
  return (
    <Container>
      <Logo width="100%" />
      {/* <Typography variant="body2">
        Bring fragrance and freshness to your table
      </Typography> */}
    </Container>
  )
}
