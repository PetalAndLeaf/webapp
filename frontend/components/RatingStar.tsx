import React from 'react'
import styled from 'styled-components'
import FeatherIcon from './FeatherIcon'
import { motion } from 'framer-motion'
import { styles } from '../styles/theme'

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100px;
`
const Base = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
`
const Mask = styled.div`
  overflow-x: hidden;
  width: 100%;
`
const Fill = styled.div`
  display: flex;
  width: 100px;
`
interface propsValue {
  rating: any
}
export default function RatingStar({ rating }: propsValue) {
  const width = (rating / 5) * 100
  return (
    <Container>
      <Base>
        <FeatherIcon
          icon="star"
          style={{ color: styles.palette.primary.main }}
        />
        <FeatherIcon
          icon="star"
          style={{ color: styles.palette.primary.main }}
        />
        <FeatherIcon
          icon="star"
          style={{ color: styles.palette.primary.main }}
        />
        <FeatherIcon
          icon="star"
          style={{ color: styles.palette.primary.main }}
        />
        <FeatherIcon
          icon="star"
          style={{ color: styles.palette.primary.main }}
        />
      </Base>
      <Mask style={{ width: width }}>
        <Fill>
          <FeatherIcon
            icon="star"
            style={{
              color: styles.palette.primary.main,
              fill: styles.palette.primary.main
            }}
          />
          <FeatherIcon
            icon="star"
            style={{
              color: styles.palette.primary.main,
              fill: styles.palette.primary.main
            }}
          />
          <FeatherIcon
            icon="star"
            style={{
              color: styles.palette.primary.main,
              fill: styles.palette.primary.main
            }}
          />
          <FeatherIcon
            icon="star"
            style={{
              color: styles.palette.primary.main,
              fill: styles.palette.primary.main
            }}
          />
          <FeatherIcon
            icon="star"
            style={{
              color: styles.palette.primary.main,
              fill: styles.palette.primary.main
            }}
          />
        </Fill>
      </Mask>
    </Container>
  )
}
