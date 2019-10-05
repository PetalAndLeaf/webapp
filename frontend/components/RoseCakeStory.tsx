import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`
interface propsValue {
  product: any
  story: any
}
export default function RoseCakeStory({ product, story }: propsValue) {
  return (
    <Container>
      {product.name}
      {story.hero.title}
    </Container>
  )
}
