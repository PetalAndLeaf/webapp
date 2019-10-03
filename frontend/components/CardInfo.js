import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
import Link from './Link'

const Container = styled(motion.div)`
  padding: 32px;
  /* pointer-events: none; */
`

export default function CardInfo({ data }) {
  return (
    <Container>
      <Typography variant="h3">{data.name}</Typography>
      {data.tags && (
        <Typography variant="caption">
          {data.tags.map((t, i) => {
            if (i === 0) {
              return t
            } else {
              return ` | ${t}`
            }
          })}
        </Typography>
      )}

      <Typography variant="body2" style={{ marginTop: 32, marginBottom: 32 }}>
        {data.description}
      </Typography>
      {data.storyID && (
        <Link href="/p/[id]" as={`/p/${data.id}`}>
          Read the story
        </Link>
      )}
    </Container>
  )
}
