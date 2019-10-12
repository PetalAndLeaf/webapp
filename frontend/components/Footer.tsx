import React, { Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { styles } from '../styles/theme'
import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

const Container = styled(motion.div)`
  /* width: 100%; */
  border-top: 1px solid ${styles.palette.divider};
  text-align: center;
  max-width: 100%;
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 32px;
  padding-top: 24px;
  padding-bottom: 32px;
`

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  & a {
    display: block;
    margin-left: 16px;
    margin-right: 16px;
    color: ${styles.palette.text.secondary};
    /* &:not(:first-of-type) {
      margin-left: 16px;
    } */
  }
`

export default function Footer() {
  const footer = useSelector((state: any) => state.content.footer)
  const links: any[] = footer.links ? footer.links : []
  const date = new Date()
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <LinkGroup>
        {links.map((l, i) => {
          return (
            <Fragment key={l + i}>
              {i !== 0 && '   |'}
              <a href={l.url} target="_blank">
                <Typography
                  variant="button"
                  style={{
                    textTransform: 'none',
                    fontWeight: 400,
                    color: styles.palette.text.primary
                  }}
                >
                  {l.name}
                </Typography>
              </a>
            </Fragment>
          )
        })}
      </LinkGroup>
      <Typography variant="caption" color="textSecondary">
        {`© ${date.getFullYear()} Petal And Leaf LLC. All rights reserved.`}
      </Typography>
    </Container>
  )
}
