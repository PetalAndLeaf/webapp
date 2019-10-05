import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { Typography } from '@material-ui/core'

const Container = styled(motion.div)`
  width: 100%;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`
export default function Hero() {
  return (
    <Container>
      <Logo width="100%" />
      <Typography variant="body2" style={{ marginTop: 32 }}>
        Nulla sunt ex sint fugiat quis enim mollit ipsum. Adipisicing irure
        reprehenderit officia ullamco eu ipsum amet consequat. Est nostrud
        proident nostrud esse quis est minim duis nisi nulla aute labore
        cupidatat dolor.
      </Typography>
    </Container>
  )
}
