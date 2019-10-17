import React, { Fragment } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography, Grid } from '@material-ui/core'
import FeatherIcon from './FeatherIcon'

const Container = styled(motion.div)`
  width: 100%;
  overflow: hidden;
`
// const HeroContainer = styled(motion.div)`
//   width: 100%;
//   text-align: center;
// `
// const HeroImage = styled.img`
//   margin-top: 32px;
//   max-width: 100%;
//   max-height: 480px;
// `
const HighlightsContainer = styled(Grid)`
  max-width: 1280px;
  /* display: flex;
  justify-content: space-between; */
  margin-right: auto;
  margin-left: auto;
  margin-top: 144px;
  margin-bottom: 72px;
`
const Highlight = styled(Grid)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const RoseImage = styled.img`
  max-width: 80%;
  height: auto;
`

const IngradientsContainer = styled.div`
  /* max-width: 1280px;
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  margin-top: 144px;
  margin-bottom: 72px; */
  margin-top: 96px;
  margin-bottom: 72px;
  max-width: 1280px;
  text-align: center;

  margin-right: auto;
  margin-left: auto;
`

const IngradientsListContainer = styled(Grid)`
  margin-top: 144px;
  width: 100%;
`
const DividerDeco = styled.div`
  width: 60px;
  height: 1px;
  background-color: #a79385;
  margin: 32px 0;
`

interface propsValue {
  product?: any
  story: any
}
export default function RoseCakeStory({ story }: propsValue) {
  const { highlights, rose, ingradients } = story
  return (
    <Container>
      <HighlightsContainer container>
        {highlights.map((h: any, i: number) => {
          return (
            <Highlight item key={h + i} xs={12} sm={4}>
              <img src={`/static/images/${h.icon}`} alt={h.icon} />
              <Typography variant="body1" style={{ maxWidth: 280 }}>
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
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <RoseImage src={`/static/images/${rose.image}`} alt={rose.image} />
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
                <FeatherIcon icon={h.icon} style={{ marginRight: 16 }} />
                <Typography variant="body2">{h.text}</Typography>
              </RoseHighlight>
            )
          })}
        </Grid>
      </RoseContainer>
      <IngradientsContainer>
        <Typography variant="h4">Natural ingradients only</Typography>
        <DividerDeco style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        <IngradientsListContainer container>
          {ingradients.map((ing: any, i: number) => {
            return (
              <Grid item xs={12} sm={4} key={ing + i}>
                <img
                  src={`/static/images/${ing.image}`}
                  alt={ing.image}
                  style={{ height: 200 }}
                />
                <Typography variant="body1">{ing.name}</Typography>
              </Grid>
            )
          })}
        </IngradientsListContainer>
      </IngradientsContainer>
      {/* {product.name} */}
    </Container>
  )
}
