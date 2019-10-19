import { injectStripe } from 'react-stripe-elements'
import { CardElement } from 'react-stripe-elements'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import RoundedBtn from './Button/RoundedBtn'
import fetch from 'isomorphic-unfetch'

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
  const [cardElement, setCardElement] = useState(null)

  const handleChange = (change: any) => {
    if (change.error) {
      setErrMsg(change.error.message)
    } else {
      setErrMsg('')
      setIsValid(true)
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (stripe) {
      stripe.createToken().then((payload: any) => {
        console.log(payload)
        if (payload.error) {
          setErrMsg(payload.error.message)
        } else {
          const last4 = payload.token.card.last4
          handleSuccess && handleSuccess(last4)
        }
      })
      const orderData = {
        total: 1500
      }
      const result = await fetch(
        'https://us-central1-petalleafweb.cloudfunctions.net/api/create-payment-intent',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData)
        }
      )

      const data = await result.json()

      const { paymentIntent, error } = await stripe.handleCardPayment(
        data.clientSecret,
        cardElement
      )

      if (error) {
        console.log('Error: ', error)
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Succeeded!')
      }
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
  const handleReady = (e: any) => {
    console.log('[ready]')
    setCardElement(e)
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
      <Typography variant="body2" color="error">
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
