import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ColorExtractor } from 'react-color-extractor'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

const Container = styled(motion.div)`
  width: 100%;
  border-radius: 20px;
  background-color: ${props => props.backgroundColor};
  /* background-color: #ECE8DC; */
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 72px;
  }
`

export default function ProuductCard({ data, ...props }) {
  const [backgroundColor, setBackgroundColor] = useState('#F6F6F6')
  const getBackgroundColor = colors => {
    const Color = require('color')
    const color = Color(colors[4])
      .lighten(0.2)
      .hex()
      .toString()
    setBackgroundColor(color)
  }
  return (
    <Container
      backgroundColor={backgroundColor}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duraton: 1, delay: 1 }}
      {...props}
    >
      <ColorExtractor
        src={`./static/${data.images[0]}`}
        getColors={getBackgroundColor}
      />
      <CardImage data={data.images} />
      <CardInfo data={data} />
    </Container>
  )
}
