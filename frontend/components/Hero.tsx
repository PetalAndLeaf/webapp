import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { Typography, Box } from '@material-ui/core'
import IconBtn from './IconBtn'

const Container = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`

const Socials = styled.div`
  display: flex;
  margin-top: 24px;
`
export default function Hero() {
  return (
    <Container>
      <Logo width="100%" />
      <Typography variant="body2" style={{ marginTop: 32 }}>
        Cupidatat exercitation officia veniam ex commodo culpa incididunt. Et
        pariatur culpa sint consequat deserunt consequat duis fugiat velit.
      </Typography>
      <Typography variant="h6" style={{ marginTop: 24, display: 'block' }}>
        #PETALLEAF &nbsp; #ROSECAKE
      </Typography>
      <Socials>
        <a href="https://www.instagram.com/thepetalleaf/" target="_blank">
          <IconBtn icon="instagram" btype="solid" />
        </a>

        <Box width={16} />
        <a href="https://www.facebook.com/thepetalleaf/" target="_blank">
          <IconBtn icon="facebook" btype="solid" />
        </a>
      </Socials>
    </Container>
  )
}
