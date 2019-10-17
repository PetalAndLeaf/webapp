import React, { useState, useEffect, useRef } from 'react'
import { StripeProvider } from 'react-stripe-elements'
import { CustomWindow } from '../utils/types'
declare let window: CustomWindow

type TProvider = React.FC<{ apiKey: string }>

const AsyncStripeProvider: TProvider = props => {
  const { apiKey, children } = props
  const [stripe, setStripe] = useState<stripe.Stripe | null>(null)
  const isMounted = useRef(false)
  const unmountFn = () => {
    isMounted.current = false
  }

  useEffect(() => {
    isMounted.current = true

    // If we already have stripe loaded, we don't need to do anything
    if (stripe) return unmountFn

    // Check if Stripe already exists in the window (probably from a previous mount)
    if ((window as any).Stripe) {
      setStripe(window.Stripe(apiKey))
      return unmountFn
    }

    // Otherwise, we need to create the script element
    const stripeJs = document.createElement('script')
    stripeJs.src = 'https://js.stripe.com/v3/'
    stripeJs.async = true

    // Tell our component what to do once the script has loaded
    stripeJs.onload = () => {
      // Only update Stripe if this component is still mounted
      if (isMounted) setStripe(window.Stripe(apiKey))
    }

    // Add the script to the document
    document.body && document.body.appendChild(stripeJs)

    return unmountFn
  }, [stripe, apiKey])

  return (
    <StripeProvider stripe={stripe}>
      <>{children}</>
    </StripeProvider>
  )
}

export default AsyncStripeProvider

/* Reference
  https://gist.github.com/daviseford/4a0ed622dc47090fe22c1870217d88d6
  https://gist.github.com/mrcoles/8c79595f488f0e334e528163feb23293
*/
