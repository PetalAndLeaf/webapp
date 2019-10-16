import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
import LinkBtn from '../Button/LinkBtn'
import { styles } from '../../styles/theme'
import AddToBagBtn from './AddToBagBtn'

const Container = styled(motion.div)`
  padding: 16px;
  /* pointer-events: none; */
`
const Headline = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Price = styled.p`
  font-family: ${styles.typography.button.fontFamily};
  font-size: 14px;
  font-weight: 400;
  color: ${styles.palette.text.primary};
`

interface propsValue {
  data: {
    name: string
    tags: string[]
    description: string
    storyID?: string
    id: string
  }
}

export default function CardInfo({ data }: propsValue) {
  return (
    <Container>
      <Headline>
        <Typography variant='h4'>{data.name}</Typography>
        <Price>$15 (30g, 6 counts) | $18 (50g, 6 counts)</Price>
      </Headline>

      {/* {data.tags && (
        <Typography variant="caption">
          {data.tags.map((t: any, i: number) => {
            if (i === 0) {
              return t
            } else {
              return ` | ${t}`
            }
          })}
        </Typography>
      )} */}
      <Typography
        variant='body2'
        style={{ marginTop: 8, marginBottom: 24 }}
        color='textSecondary'
      >
        <i style={{ color: styles.palette.text.primary }}>
          {data.tags.map((t: any, i: number) => {
            if (i === 0) {
              return t
            } else {
              return ` | ${t}`
            }
          })}
        </i>
        &nbsp; - {data.description}.&nbsp;
        <LinkBtn href='/p/[id]' as={`/p/${data.id}`}>
          Read more
        </LinkBtn>
      </Typography>
      {/* <RoundedBtn>Add to bag</RoundedBtn> */}
      <AddToBagBtn />
    </Container>
  )
}
