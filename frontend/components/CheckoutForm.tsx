import { injectStripe } from 'react-stripe-elements'
import { CardElement } from 'react-stripe-elements'

function CheckoutForm() {
  return (
    <>
      <CardElement
        style={{
          base: { fontFamily: 'Space Mono, monospace', color: 'black' }
        }}
      />
    </>
  )
}
export default injectStripe(CheckoutForm)
