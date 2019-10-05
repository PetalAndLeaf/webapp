import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  overflow: hidden;
  height: 360px;
  width: 100%;
  display: flex;
  align-items: center;
`
const Image = styled(motion.img)`
  width: 100%;
`
interface propsValue {
  data: string[]
}
export default function CardImage({ data }: propsValue) {
  return (
    <Container>
      <Image src={`/static/${data[0]}`} alt={data[0]} />
    </Container>
  )
}
