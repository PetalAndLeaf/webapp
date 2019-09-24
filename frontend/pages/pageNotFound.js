import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
import Link from '../components/Link'

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export default function PageNotFound() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duraton: 2, delay: 1, ease: 'linear' }}
    >
      <Typography variant="h3" style={{ marginBottom: 32 }}>
        404
      </Typography>
      <Typography variant="body2" style={{ marginBottom: 32 }}>
        Page not found
      </Typography>
      <Link href="/">Back home</Link>
    </Container>
  )
}
