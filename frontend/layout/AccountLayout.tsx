import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Grid } from '@material-ui/core'
import AccountNav from '../components/AccountNav'
import Card from '../components/Card'

const Root = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Main = styled.div`
  width: 100%;
  margin-top: 160px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
`

interface propsValue {
  children: JSX.Element[] | JSX.Element
}
export default function AccountLayout({ children }: propsValue) {
  return (
    <Root>
      <Header type="account" />
      <Main>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <AccountNav />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card
              style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}
            >
              {children}
            </Card>
          </Grid>
        </Grid>
      </Main>
      <Footer fading={false} />
    </Root>
  )
}
