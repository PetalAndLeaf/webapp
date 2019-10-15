import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { LogInAction, SignUpAction } from '../store/user/action'
import { motion } from 'framer-motion'
import InputField from './InputField'
import TextBtn from './TextBtn'
import RoundedBtn from './RoundedBtn'
import { errorMsgMap } from '../utils/types'

const Root = styled(motion.div)`
  width: 600px;
  padding: 32px 24px;
`

const Header = styled.div`
  height: 64px;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;
`

const Form = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 32px auto;
`

const ErrorBanner = styled.div`
  width: 320px;
  text-align: center;
  margin-bottom: 16px;
`

interface propsValue {
  initMode?: string
  onSuccess?: Function
}

function Login({ initMode = 'login', onSuccess }: propsValue) {
  const dispatch = useDispatch()
  const authError = useSelector((state: any) => state.user.err)
  const isLoggedin = useSelector((state: any) => state.user.isLoggedin)
  const [mode, setMode] = useState(initMode)
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    if (isLoggedin && onSuccess) {
      onSuccess()
    }
    if (authError !== null) {
      console.log('Login dialog : ', authError)
      const newErroMsg = errorMsgMap.get(authError) || 'Something went wrong'
      setErrMsg(newErroMsg)
    } else {
      setErrMsg('')
    }
  }, [isLoggedin, authError])

  const handleModeChange = (mode: string) => {
    setErrMsg('')
    setMode(mode)
  }

  const handleSubmitClick = () => {
    setErrMsg('')
    if (mode === 'login') {
      dispatch(LogInAction(email, pwd))
    } else {
      dispatch(SignUpAction(email, pwd))
    }
  }

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
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header>
        <Typography variant='h4' style={{ marginBottom: 8 }}>
          {mode === 'login' ? 'Welcome back' : 'Welcome'}
        </Typography>
        <Typography variant='h6' color='textSecondary'>
          {mode === 'login'
            ? 'Log in with your email and password'
            : 'Create an account to start shopping'}
        </Typography>
      </Header>

      <Form>
        {errMsg !== '' && (
          <ErrorBanner>
            <Typography variant='body1' color='error'>
              {errMsg}
            </Typography>
          </ErrorBanner>
        )}
        <InputField
          type='email'
          label='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputField
          type='password'
          label='Password'
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />

        <RoundedBtn style={{ marginTop: 8 }} onClick={handleSubmitClick}>
          {mode === 'login' ? 'Log in' : 'Sign up'}
        </RoundedBtn>

        <Typography
          variant='caption'
          style={{ textAlign: 'center', marginTop: 16 }}
        >
          {mode === 'login'
            ? "Don't have an account? "
            : 'Already have an account? '}
          <TextBtn
            onClick={() =>
              handleModeChange(mode === 'login' ? 'signup' : 'login')
            }
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </TextBtn>
        </Typography>
        {mode === 'login' && (
          <Typography
            variant='caption'
            style={{ textAlign: 'center', marginTop: 8 }}
          >
            Forgot password? &nbsp;
            <TextBtn>Reset</TextBtn>
          </Typography>
        )}
      </Form>
    </Root>
  )
}

export default Login
