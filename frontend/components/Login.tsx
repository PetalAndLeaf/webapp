import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { LogInAction, SignOutAction, SignUpAction } from '../store/user/action'
import { motion } from 'framer-motion'
import InputField from './InputField'
// import RoundedBtn from './RoundedBtn'

const Root = styled(motion.div)`
  width: 600px;
  padding: 24px;
`

const Header = styled.div`
  height: 64px;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
`

function Login() {
  const dispatch = useDispatch()
  const isLoggedin = useSelector((state: any) => state.user.isLoggedin)

  // console.log('isLoggedin: ', isLoggedin)
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  // const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <Root
      variants={{
        visible: {
          opacity: 1
        },
        hidden: {
          opacity: 0
        }
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header>
        <Typography variant="h4">Log in</Typography>
      </Header>
      {isLoggedin ? (
        <>
          <p>Logged in</p>
          <Button onClick={() => dispatch(SignOutAction())}>Sign Out</Button>
        </>
      ) : (
        <form style={{ maxWidth: 320 }}>
          <InputField
            type="email"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            label="Password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
          />
          <Button onClick={() => dispatch(LogInAction(email, pwd))}>
            Login
          </Button>

          <Button onClick={() => dispatch(SignUpAction(email, pwd))}>
            Sign Up
          </Button>
        </form>
      )}
    </Root>
  )
}

export default Login
