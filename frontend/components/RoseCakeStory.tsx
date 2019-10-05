import React, { Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography, Grid } from '@material-ui/core'
import SVG from 'react-inlinesvg'

const Container = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`
const HeroContainer = styled(motion.div)`
  width: 100%;
  text-align: center;
`
const HeroImage = styled.img`
  margin-top: 32px;
  max-width: 100%;
  max-height: 480px;
`
const HighlightsContainer = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  margin-top: 144px;
  margin-bottom: 72px;
`
const Highlight = styled.div`
  text-align: center;
  width: 280px;
`

const RoseContainer = styled(Grid)`
  margin-top: 144px;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
`

const RoseHighlight = styled.div`
  display: flex;
  margin-top: 16px;
`
const DividerDeco = styled.div`
  width: 60px;
  height: 1px;
  background-color: #a79385;
  margin: 32px 0;
`

interface propsValue {
  product: any
  story: any
}
export default function RoseCakeStory({ product, story }: propsValue) {
  const { hero, highlights, rose } = story
  const feather = require('feather-icons')
  return (
    <Container>
      <HeroContainer>
        <HeroImage src={`/static/${hero.image}`} alt="rose-cake" />
        <Typography variant="h3">{hero.title}</Typography>
        <Typography
          variant="body2"
          style={{
            maxWidth: 320,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 32
          }}
        >
          {hero.subtitle}
        </Typography>
      </HeroContainer>
      <HighlightsContainer>
        {highlights.map((h: any, i: number) => {
          return (
            <Highlight key={h + i}>
              <img src={`/static/${h.icon}`} alt={h.icon} />
              <Typography variant="body1">
                {h.text.split('<br>').map((t: string, i: number) => {
                  return i === 0 ? (
                    <Fragment key={`string-${t}`}>
                      <br></br>
                      {t}
                    </Fragment>
                  ) : (
                    <Fragment key={`string-${t}`}>
                      <br></br>
                      {t}
                    </Fragment>
                  )
                })}
              </Typography>
            </Highlight>
          )
        })}
      </HighlightsContainer>
      <RoseContainer container>
        <Grid item xs={12} sm={6}>
          <img
            src={`/static/${rose.image}`}
            style={{ width: '100%' }}
            alt={rose.image}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{rose.title}</Typography>
          <Typography variant="body1" style={{ maxWidth: 480, marginTop: 16 }}>
            {rose.subtitle}
          </Typography>
          <DividerDeco />
          {rose.highlights.map((h: any, i: number) => {
            return (
              <RoseHighlight key={h + i}>
                <SVG
                  src={feather.icons[h.icon].toSvg()}
                  style={{ width: 20, height: 20, marginRight: 16 }}
                />
                <Typography variant="body2">{h.text}</Typography>
              </RoseHighlight>
            )
          })}
        </Grid>
      </RoseContainer>
      {product.name}
    </Container>
  )
}
