import { injectStripe } from 'react-stripe-elements'
import { CardElement } from 'react-stripe-elements'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import RoundedBtn from './Button/RoundedBtn'

const Container = styled.form`
  margin-bottom: 16px;
`
interface propsValue {
  stripe?: any
  handleSuccess?: Function
}
function CheckoutForm({ stripe, handleSuccess }: propsValue) {
  const [errMsg, setErrMsg] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleChange = (change: any) => {
    if (change.error) {
      setErrMsg(change.error.message)
    } else {
      setErrMsg('')
    }
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (stripe) {
      stripe.createToken().then((payload: any) => {
        if (payload.error) {
          setErrMsg(payload.error.message)
        } else {
          const last4 = payload.token.card.last4
          handleSuccess && handleSuccess(last4)
        }
      })
    } else {
      console.log("Stripe.js hasn't loaded yet.")
    }
  }

  const handleBlur = () => {
    if (errMsg === '') {
      setIsValid(true)
    }
  }
  const handleFocus = () => {
    console.log('[focus]')
  }
  const handleReady = () => {
    console.log('[ready]')
  }

  return (
    <Container>
      <CardElement
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onReady={handleReady}
        style={{
          base: {
            fontFamily: "'Fira Code', Lato, Helvetica, Arial, sans-serif",
            fontWeight: '400',
            lineHeight: '28px',
            color: styles.palette.text.primary,
            fontSize: '18px'
          }
        }}
      />
      <Typography variant='body2' color='error'>
        {errMsg}
      </Typography>
      <RoundedBtn
        onClick={(e: any) => isValid && handleSubmit(e)}
        style={{ marginTop: 16 }}
        disabled={!isValid}
      >
        Continue
      </RoundedBtn>
    </Container>
  )
}
export default injectStripe(CheckoutForm)
