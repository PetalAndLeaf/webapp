import React, { useEffect, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Grid, Typography } from '@material-ui/core'
import CartItem from '../components/CartItem'
import RoundedBtn from '../components/RoundedBtn'
import FeatherIcon from '../components/FeatherIcon'
import IconBtn from '../components/IconBtn'
import InputField from '../components/InputField'
import { styles } from '../styles/theme'
import { setConfig, setFooter } from '../store/content/action'
import { Dictionary } from '../utils/types'
import { Elements } from 'react-stripe-elements'
import CheckoutForm from '../components/CheckoutForm'
import Router from 'next/router'
import AddressForm from '../components/AddressForm'

const Container = styled(motion.div)`
  max-width: 100%;
`

const ContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const Header = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  background-color: rgba(256, 256, 256, 1);
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
const Logo = styled.img`
  height: 40px;
  width: auto;
  cursor: pointer;
`
const Main = styled.main`
  margin-top: 144px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`
const Left = styled(Grid)``

const Right = styled(Grid)``

const SummaryCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 15px 46px -10px rgba(29, 28, 27, 0.3);
`

const SummaryHeader = styled.div`
  height: 64px;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
`

const ItemList = styled.ul`
  padding-left: 8px;
  padding-right: 8px;
  margin: 0;
`
const Bottom = styled(motion.div)`
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
`
const SummaryList = styled.div`
  margin-bottom: 16px;
`
const SummaryListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 8px;
  padding-right: 8px;
`

const Section = styled.div`
  position: relative;

  &:not(:first-child) {
    border-top: 1px solid ${styles.palette.divider};
    margin-top: 24px;
  }
`
const SectionHeader = styled(motion.header)`
  padding-top: 24px;
  margin-bottom: 24px;
  display: flex;
  cursor: default;
`
const SectionContent = styled(motion.section)``

const initAddressError: Dictionary = {
  fullname: '',
  line1: '',
  line2: '',
  city: '',
  state: '',
  zipcode: '',
  phone: ''
}
const initAddress: Dictionary = {
  fullname: '',
  line1: '',
  line2: '',
  city: '',
  state: '',
  zipcode: '',
  phone: '',
  formattedPhone: '',
  errors: initAddressError,
  isValid: false
}

export default function Checkout() {
  const items = useSelector((state: any) => state.cart.items)

  const currentUser = useSelector((state: any) => state.user.currentUser)
  const [subtotal, setSubtotal] = useState(0)
  const [expanded, setExpanded] = useState<false | string>('email')
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    error: ''
  })
  const [address, setAddress] = useState(initAddress)
  const [payment, setPayment] = useState({
    isValid: false,
    last4: ''
  })

  useEffect(() => {
    if (currentUser !== null) {
      setEmail({
        ...email,
        value: currentUser.email,
        isValid: true
      })
      setExpanded('address')
    }
  }, [])
  useEffect(() => {
    const subtotal = items.reduce((value: number, item: any) => {
      const itemTotal = item.price * item.quantity
      return itemTotal + value
    }, 0)
    setSubtotal(subtotal)
  }, [items])

  const handleEmailOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    //TODO: add this logic to login box
    const value = e.target.value
    const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    setEmail({
      error: isValid ? '' : email.error,
      isValid: isValid ? true : false,
      value: value
    })
  }

  const handleAddressSubmit = (newAddress: any) => {
    setExpanded('payment')
    setAddress(newAddress)
  }

  return (
    <Container
      variants={ContainerVariants}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header>
        <Link href="/">
          <Logo src="/static/logo.svg" />
        </Link>
      </Header>
      <Main>
        <Grid container spacing={4}>
          <Left item xs={12} sm={7}>
            <Section>
              <SectionHeader>
                <FeatherIcon icon="user" />
                <Typography variant="h5" style={{ marginLeft: 8 }}>
                  Your email
                </Typography>
              </SectionHeader>
              <SectionContent>
                <AnimatePresence initial={false}>
                  {expanded === 'email' ? (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeIn'
                      }}
                    >
                      <InputField
                        name="email"
                        value={email.value}
                        placeholder="Email"
                        error={email.error}
                        onChange={handleEmailOnChange}
                        onBlur={() => {
                          !email.isValid &&
                            setEmail({ ...email, error: 'Invalid email' })
                        }}
                      />

                      <Typography
                        variant="caption"
                        style={{ display: 'block' }}
                      >
                        You'll receive receipts and notifications at this email
                        address.
                        {/* Already have an account?<TextBtn >Login</TextBtn> */}
                      </Typography>
                      <RoundedBtn
                        onClick={() => email.isValid && setExpanded('address')}
                        style={{ marginTop: 16 }}
                        disabled={!email.isValid}
                      >
                        Continue
                      </RoundedBtn>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeIn'
                      }}
                    >
                      <Typography variant="body2">{email.value}</Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SectionContent>
              {expanded !== 'email' && (
                <IconBtn
                  icon="edit"
                  onClick={() => setExpanded('email')}
                  style={{ position: 'absolute', right: 16, top: 16 }}
                />
              )}
            </Section>
            <Section>
              <SectionHeader>
                <FeatherIcon icon="location" />
                <Typography variant="h5" style={{ marginLeft: 8 }}>
                  Shipping address
                </Typography>
              </SectionHeader>
              <SectionContent>
                {expanded === 'address' ? (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeIn'
                    }}
                  >
                    <AddressForm
                      initAddress={address}
                      submitBtn={{
                        label: 'Continue',
                        handleClick: handleAddressSubmit
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeIn'
                    }}
                  >
                    {address.isValid && (
                      <>
                        <Typography variant="body2">
                          {address.fullname}
                        </Typography>
                        <Typography variant="body2">{`${address.line1}, ${address.line2}`}</Typography>
                        <Typography variant="body2">{`${address.city}, ${address.state} ${address.zipcode}`}</Typography>
                        <Typography variant="body2">
                          {address.formattedPhone}
                        </Typography>
                      </>
                    )}
                  </motion.div>
                )}
              </SectionContent>
              {expanded !== 'address' && address.isValid && (
                <IconBtn
                  icon="edit"
                  onClick={() => setExpanded('address')}
                  style={{ position: 'absolute', right: 16, top: 16 }}
                />
              )}
            </Section>
            <Section>
              <SectionHeader>
                <FeatherIcon icon="card" />
                <Typography variant="h5" style={{ marginLeft: 8 }}>
                  Payment
                </Typography>
              </SectionHeader>
              <SectionContent>
                {expanded === 'payment' ? (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeIn'
                    }}
                  >
                    <Elements>
                      <CheckoutForm
                        handleSuccess={(last4: string) => {
                          setExpanded(false)
                          setPayment({
                            ...payment,
                            last4: last4,
                            isValid: true
                          })
                        }}
                      />
                    </Elements>
                  </motion.div>
                ) : (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeIn'
                    }}
                  >
                    {payment.last4 !== '' && (
                      <Typography variant="body2">{`XXXX XXXX XXXX ${payment.last4}`}</Typography>
                    )}
                  </motion.div>
                )}
              </SectionContent>
              {expanded !== 'payment' && payment.isValid && (
                <IconBtn
                  icon="edit"
                  onClick={() => setExpanded('payment')}
                  style={{ position: 'absolute', right: 16, top: 16 }}
                />
              )}
            </Section>
          </Left>
          <Right item xs={12} sm={5}>
            <SummaryCard>
              <SummaryHeader>
                <Typography variant="h5">Order Summary</Typography>
              </SummaryHeader>
              <ItemList>
                {items.map((item: any, i: number) => {
                  return (
                    <CartItem data={item} key={item + i} editable={false} />
                  )
                })}
              </ItemList>
              <Bottom>
                <SummaryList>
                  <SummaryListItem>
                    <Typography variant="h6">Subtotal</Typography>
                    <Typography
                      variant="button"
                      color="textSecondary"
                    >{`$${subtotal}`}</Typography>
                  </SummaryListItem>
                  <SummaryListItem>
                    <Typography variant="h6">Shipping</Typography>
                    <Typography variant="button" color="textSecondary">
                      {subtotal >= 45 ? '$0' : '$8'}
                    </Typography>
                  </SummaryListItem>
                  <SummaryListItem>
                    <Typography variant="h5">Total</Typography>
                    <Typography variant="button" style={{ fontSize: 18 }}>
                      {`$${subtotal + (subtotal >= 45 ? 0 : 8)}`}
                    </Typography>
                  </SummaryListItem>
                </SummaryList>
                <RoundedBtn
                  btype="large"
                  disabled={
                    email.isValid && address.isValid && payment.isValid
                      ? false
                      : true
                  }
                  onClick={() =>
                    //TODO: assigned to rj@
                    //need a result from dispatched checkout action
                    //before able to push router
                    email.isValid &&
                    address.isValid &&
                    payment.isValid &&
                    Router.push('/checkout/result')
                  }
                >
                  Place order
                </RoundedBtn>
              </Bottom>
            </SummaryCard>
          </Right>
        </Grid>
      </Main>
    </Container>
  )
}

Checkout.getInitialProps = async function(ctx: any) {
  const { store, isServer } = ctx
  // store.dispatch(closeSidebar())
  if (isServer) {
    await store.dispatch(setConfig())
    await store.dispatch(setFooter())
  }
  return {
    isServer
  }
}
