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
import states from '../static/states_hash.json'
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js'
import { setConfig, setFooter } from '../store/content/action'
// import Login from '../components/Login'
import { Dictionary } from '../utils/types'
// import TextBtn from '../components/TextBtn'
// import { closeSidebar } from '../store/cart/action'

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
  /* box-shadow: 0 15px 32px -10px rgba(29, 28, 27, 0.3); */
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

export default function Checkout() {
  const items = useSelector((state: any) => state.cart.items)
  // const isLoggedin = useSelector((state: any) => state.user.isLoggedin)
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    error: ''
  })

  // Define a dic type so we could get the value of an object
  // with this format: object[key]

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
  const [address, setAddress] = useState(initAddress)
  // const [payment, setPayment] = useState(undefined)

  const [subtotal, setSubtotal] = useState(0)
  const [expanded, setExpanded] = useState<false | string>('email')

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
  const handleAddressOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value
    const name = e.target.name
    setAddress({
      ...address,
      [name]: value,
      errors: {
        ...address.errors,
        [name]: value !== '' ? '' : address.errors[name]
      }
    })
  }
  const handlePhoneOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const currentFormatted = e.target.value
    const phone = currentFormatted.replace(/[^\d]/g, '')
    const formatted = new AsYouType('US').input(phone)
    setAddress({
      ...address,
      phone: phone,
      formattedPhone: formatted,
      errors: {
        ...address.errors,
        phone: phone !== '' ? '' : address.errors.phone
      }
    })
  }
  const handleAddressOnBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    error: string = 'empty'
  ) => {
    const name = e.target.name
    let errorMsg = ''
    if (error.includes('empty') && address[name] === '') {
      errorMsg = 'This is required'
    }
    if (error.includes('phone')) {
      const phone = parsePhoneNumberFromString(address.formattedPhone, 'US')
      if (phone === undefined || !phone.isValid()) {
        errorMsg = 'Invalid phone number'
      }
    }
    let isValid: boolean = true
    if (errorMsg !== '') isValid = false
    const items = ['fullname', 'line1', 'city', 'state', 'zipcode', 'phone']
    items.forEach(item => {
      if (address[item] === '') isValid = false
    })

    setAddress({
      ...address,
      errors: {
        ...address.errors,
        [name]: errorMsg
      },
      isValid: isValid
    })
  }
  useEffect(() => {
    const subtotal = items.reduce((value: number, item: any) => {
      const itemTotal = item.price * item.quantity
      return itemTotal + value
    }, 0)
    setSubtotal(subtotal)
  }, [items])
  return (
    <Container
      variants={ContainerVariants}
      animate='visible'
      initial='hidden'
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Header>
        <Link href='/'>
          <Logo src='/static/logo.svg' />
        </Link>
      </Header>
      <Main>
        <Grid container spacing={4}>
          <Left item xs={12} sm={7}>
            <Section>
              <SectionHeader>
                <FeatherIcon icon='user' />
                <Typography variant='h5' style={{ marginLeft: 8 }}>
                  Your email
                </Typography>
              </SectionHeader>
              <SectionContent>
                <AnimatePresence initial={false}>
                  {expanded === 'email' ? (
                    <motion.div
                      initial='collapsed'
                      animate='open'
                      exit='collapsed'
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
                        name='email'
                        value={email.value}
                        placeholder='Email'
                        error={email.error}
                        onChange={handleEmailOnChange}
                        onBlur={() => {
                          !email.isValid &&
                            setEmail({ ...email, error: 'Invalid email' })
                        }}
                      />

                      <Typography
                        variant='caption'
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
                      initial='collapsed'
                      animate='open'
                      exit='collapsed'
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeIn'
                      }}
                    >
                      <Typography variant='body2'>{email.value}</Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SectionContent>
              {expanded !== 'email' && (
                <IconBtn
                  icon='edit'
                  onClick={() => setExpanded('email')}
                  style={{ position: 'absolute', right: 16, top: 16 }}
                />
              )}
            </Section>
            <Section>
              <SectionHeader>
                <FeatherIcon icon='location' />
                <Typography variant='h5' style={{ marginLeft: 8 }}>
                  Shipping address
                </Typography>
              </SectionHeader>
              <SectionContent>
                {expanded === 'address' ? (
                  <motion.div
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
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
                      name='fullname'
                      label='Full Name'
                      value={address.fullname}
                      placeholder='First and Last Name'
                      error={address.errors.fullname}
                      onChange={handleAddressOnChange}
                      onBlur={handleAddressOnBlur}
                    />
                    <InputField
                      name='line1'
                      label='Address line 1'
                      value={address.line1}
                      placeholder='1000 Main St'
                      error={address.errors.line1}
                      onChange={handleAddressOnChange}
                      onBlur={handleAddressOnBlur}
                    />
                    <InputField
                      name='line2'
                      label='Address line 2'
                      value={address.line2}
                      placeholder='Apt. 1234'
                      onChange={handleAddressOnChange}
                      optional
                    />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <InputField
                          name='city'
                          label='City'
                          value={address.city}
                          placeholder='San Jose'
                          error={address.errors.city}
                          onChange={handleAddressOnChange}
                          onBlur={handleAddressOnBlur}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputField
                          name='state'
                          label='State'
                          value={address.state}
                          onChange={handleAddressOnChange}
                          onBlur={handleAddressOnBlur}
                          type='select'
                          options={Object.keys(states)}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <InputField
                          name='zipcode'
                          label='Zip code'
                          value={address.zipcode}
                          placeholder='00000'
                          error={address.errors.zipcode}
                          onChange={handleAddressOnChange}
                          onBlur={handleAddressOnBlur}
                          type='number'
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <InputField
                          name='phone'
                          label='Phone number'
                          value={address.formattedPhone}
                          error={address.errors.phone}
                          placeholder='(123) 456-7890'
                          onChange={handlePhoneOnChange}
                          onBlur={e => handleAddressOnBlur(e, 'empty|phone')}
                          type='tel'
                        />
                      </Grid>
                    </Grid>
                    <RoundedBtn
                      onClick={() => address.isValid && setExpanded('payment')}
                      style={{ marginTop: 16 }}
                      disabled={!address.isValid}
                    >
                      Continue
                    </RoundedBtn>
                  </motion.div>
                ) : (
                  <motion.div
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
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
                        <Typography variant='body2'>
                          {address.fullname}
                        </Typography>
                        <Typography variant='body2'>{`${address.line1}, ${address.line2}`}</Typography>
                        <Typography variant='body2'>{`${address.city}, ${address.state} ${address.zipcode}`}</Typography>
                        <Typography variant='body2'>
                          {address.formattedPhone}
                        </Typography>
                      </>
                    )}
                  </motion.div>
                )}
              </SectionContent>
              {expanded !== 'address' && address.isValid && (
                <IconBtn
                  icon='edit'
                  onClick={() => setExpanded('address')}
                  style={{ position: 'absolute', right: 16, top: 16 }}
                />
              )}
            </Section>
            <Section>
              <SectionHeader>
                <FeatherIcon icon='card' />
                <Typography variant='h5' style={{ marginLeft: 8 }}>
                  Payment
                </Typography>
              </SectionHeader>
              <SectionContent>
                {expanded === 'payment' ? (
                  <motion.div
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeIn'
                    }}
                  >
                    <p>open</p>
                    <RoundedBtn onClick={() => setExpanded(false)}>
                      Continue
                    </RoundedBtn>
                  </motion.div>
                ) : (
                  <p>closed</p>
                )}
              </SectionContent>
              {expanded !== 'payment' && (
                <IconBtn
                  icon='edit'
                  onClick={() => setExpanded('payment')}
                  style={{ position: 'absolute', right: 16, top: 16 }}
                />
              )}
            </Section>
          </Left>
          <Right item xs={12} sm={5}>
            <SummaryCard>
              <SummaryHeader>
                <Typography variant='h5'>Order Summary</Typography>
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
                    <Typography variant='h6'>Subtotal</Typography>
                    <Typography
                      variant='button'
                      color='textSecondary'
                    >{`$${subtotal}`}</Typography>
                  </SummaryListItem>
                  <SummaryListItem>
                    <Typography variant='h6'>Shipping</Typography>
                    <Typography variant='button' color='textSecondary'>
                      {subtotal >= 45 ? '$0' : '$8'}
                    </Typography>
                  </SummaryListItem>
                  <SummaryListItem>
                    <Typography variant='h5'>Total</Typography>
                    <Typography variant='button' style={{ fontSize: 18 }}>
                      {`$${subtotal + (subtotal >= 45 ? 0 : 8)}`}
                    </Typography>
                  </SummaryListItem>
                </SummaryList>
                <RoundedBtn btype='large' disabled>
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
