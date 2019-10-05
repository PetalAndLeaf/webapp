import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
import Link from 'next/link'

const Container = styled(motion.div)`
  padding: 32px;
  /* pointer-events: none; */
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
      <Typography variant="h3">{data.name}</Typography>
      {data.tags && (
        <Typography variant="caption">
          {data.tags.map((t: any, i: number) => {
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
      <Link href="/p/[id]" as={`/p/${data.id}`}>
        <a>Read the story</a>
      </Link>
    </Container>
  )
}
