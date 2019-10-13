import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { LogInAction, SignOutAction, SignUpAction } from '../store/user/action'

function Login() {
  const dispatch = useDispatch()
  const isLoggedin = useSelector((state: any) => state.user.isLoggedin)

  // console.log('isLoggedin: ', isLoggedin)
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  // const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <div>
      {isLoggedin ? (
        <>
          <p>Logged in</p>
          <Button onClick={() => dispatch(SignOutAction())}>Sign Out</Button>
        </>
      ) : (
        <form>
          <Typography variant='h5'>Email</Typography>
          <TextField
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Typography variant='h5'>PWD</Typography>
          <TextField
            type='password'
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
    </div>
  )
}

export default Login
