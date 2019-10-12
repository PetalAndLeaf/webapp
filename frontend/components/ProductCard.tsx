import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

const Container = styled(motion.div)`
  width: 100%;
  /* border-radius: 20px; */
  background: transparent;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 72px;
  }
`
interface propsValue {
  data: {
    images: string[]
    name: string
    tags: string[]
    description: string
    storyID?: string
    id: string
  }
  moreProps?: any[]
}
export default function ProuductCard({ data, moreProps }: propsValue) {
  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duraton: 1, delay: 0.5 }}
      {...moreProps}
    >
      <CardImage data={data.images} />
      <CardInfo data={data} />
    </Container>
  )
}
