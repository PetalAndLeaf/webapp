import React from 'react'
import { Typography } from '@material-ui/core'
import AccountLayout from '../../layout/AccountLayout'
import styled from 'styled-components'
import Router from 'next/router'

const Header = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
export default function Payment() {
  return (
    <AccountLayout>
      <Header>
        <Typography variant="h4">Your Payment info</Typography>
      </Header>
    </AccountLayout>
  )
}

Payment.getInitialProps = async function(ctx: any) {
  const { store, isServer } = ctx
  const { isLoggedin } = store.getState().user
  if (!isLoggedin) {
    if (isServer) {
      ctx.res.writeHead(302, { Location: `/` })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
  return {
    isServer
  }
}
