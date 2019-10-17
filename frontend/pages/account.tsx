import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import AccountLayout from '../layout/AccountLayout'
import styled from 'styled-components'
import InputField from '../components/InputField'
import RoundedBtn from '../components/Button/RoundedBtn'
import TextBtn from '../components/Button/TextBtn'
import Router from 'next/router'

const Header = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
export default function Profile() {
  const currentUser = useSelector((state: any) => state.user.currentUser)
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email)
    }
  }, [])

  return (
    <AccountLayout>
      <Header>
        <Typography variant="h4">Edit your account information</Typography>
      </Header>
      <InputField
        label="Email"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        value={pwd}
        type="password"
        placeholder="Password"
        onChange={(e: any) => setPwd(e.target.value)}
      />
      <RoundedBtn style={{ marginTop: 8, marginRight: 16 }}>Save</RoundedBtn>
      {
        //TODO: Implement account deletion
      }
      <TextBtn style={{ marginTop: 8 }}>Delete account</TextBtn>
    </AccountLayout>
  )
}

Profile.getInitialProps = async function(ctx: any) {
  const { store, isServer } = ctx
  // store.dispatch(closeSidebar())
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
