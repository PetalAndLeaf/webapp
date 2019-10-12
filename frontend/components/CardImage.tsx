import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import CakesPath from './CakesPath'

const Container = styled(motion.div)`
  overflow: hidden;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 16px;
  position: relative;
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
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)'
        }}
      >
        <CakesPath width="100%" />
      </div>
    </Container>
  )
}
