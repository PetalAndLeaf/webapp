import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { setConfig, setFooter } from '../../store/content/action'
import { Typography } from '@material-ui/core'
import AccountLayout from '../../layout/AccountLayout'
import styled from 'styled-components'
import InputField from '../../components/InputField'
import RoundedBtn from '../../components/RoundedBtn'
import { Dictionary } from '../../utils/types'
import states from '../../static/states_hash.json'
import { Grid } from '@material-ui/core'
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js'
import AddressBox from '../../components/AddressBox'

const Header = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

// interface addressProps {
//   fullname: string
//   line1: string
//   line2: string
//   city: string
//   state: string
//   zipcode: string
//   phone: string
// }
const addressesData = [
  {
    fullname: 'amy pu',
    line1: '550 Moreland Way',
    line2: 'Apt 3309',
    city: 'Santa Clara',
    state: 'CA',
    zipcode: '95054',
    phone: '4709857243'
  },
  {
    fullname: 'jian pu',
    line1: '550 Moreland Way',
    line2: 'Apt 3309',
    city: 'Santa Clara',
    state: 'CA',
    zipcode: '95054',
    phone: '2179745227'
  }
]
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
export default function Address() {
  const currentUser = useSelector((state: any) => state.user.currentUser)
  // 0 - default, 1 - editing, 2 - add new
  const [mode, setMode] = useState(0)
  const [addresses, setAddresses] = useState(addressesData)
  const [editingAddress, setEditingAddress] = useState(initAddress)

  useEffect(() => {
    if (currentUser && currentUser.addresses) {
      setAddresses(currentUser.addresses)
    }
  }, [currentUser])

  const handleAddClick = () => {
    setEditingAddress(initAddress)
    setMode(2)
  }

  const handleEditClick = (addr: any) => {
    const formatted = new AsYouType('US').input(addr.phone)
    const currentAddress: Dictionary = {
      fullname: addr.fullname,
      line1: addr.line1,
      line2: addr.line2 || '',
      city: addr.city,
      state: addr.state,
      zipcode: addr.zipcode,
      phone: addr.phone,
      formattedPhone: formatted,
      errors: initAddressError,
      isValid: false
    }
    setEditingAddress(currentAddress)
    setMode(1)
  }

  const handleAddressOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value
    const name = e.target.name
    setEditingAddress({
      ...editingAddress,
      [name]: value,
      errors: {
        ...editingAddress.errors,
        [name]: value !== '' ? '' : editingAddress.errors[name]
      }
    })
  }
  const handlePhoneOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const currentFormatted = e.target.value
    const phone = currentFormatted.replace(/[^\d]/g, '')
    const formatted = new AsYouType('US').input(phone)
    setEditingAddress({
      ...editingAddress,
      phone: phone,
      formattedPhone: formatted,
      errors: {
        ...editingAddress.errors,
        phone: phone !== '' ? '' : editingAddress.errors.phone
      }
    })
  }
  const handleAddressOnBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    error: string = 'empty'
  ) => {
    const name = e.target.name
    let errorMsg = ''
    if (error.includes('empty') && editingAddress[name] === '') {
      errorMsg = 'This is required'
    }
    if (error.includes('phone')) {
      const phone = parsePhoneNumberFromString(
        editingAddress.formattedPhone,
        'US'
      )
      if (phone === undefined || !phone.isValid()) {
        errorMsg = 'Invalid phone number'
      }
    }
    let isValid: boolean = true
    if (errorMsg !== '') isValid = false
    const items = ['fullname', 'line1', 'city', 'state', 'zipcode', 'phone']
    items.forEach(item => {
      if (editingAddress[item] === '') isValid = false
    })

    setEditingAddress({
      ...editingAddress,
      errors: {
        ...editingAddress.errors,
        [name]: errorMsg
      },
      isValid: isValid
    })
  }
  return (
    <AccountLayout>
      <Header>
        <Typography variant="h4">
          {mode === 1
            ? 'Edit your shipping address'
            : mode === 1
            ? 'Add shipping address'
            : 'Manage your shipping address'}
        </Typography>
      </Header>
      {mode === 0 &&
        (addresses as any).map((addr: any, i: number) => {
          return (
            <AddressBox
              address={addr}
              key={`address-${i}`}
              onEdit={() => handleEditClick(addr)}
            />
          )
        })}
      {mode !== 0 && (
        <>
          <InputField
            name="fullname"
            label="Full Name"
            value={editingAddress.fullname}
            placeholder="First and Last Name"
            error={editingAddress.errors.fullname}
            onChange={handleAddressOnChange}
            onBlur={handleAddressOnBlur}
          />
          <InputField
            name="line1"
            label="Address line 1"
            value={editingAddress.line1}
            placeholder="1000 Main St"
            error={editingAddress.errors.line1}
            onChange={handleAddressOnChange}
            onBlur={handleAddressOnBlur}
          />
          <InputField
            name="line2"
            label="Address line 2"
            value={editingAddress.line2}
            placeholder="Apt. 1234"
            onChange={handleAddressOnChange}
            optional
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="city"
                label="City"
                value={editingAddress.city}
                placeholder="San Jose"
                error={editingAddress.errors.city}
                onChange={handleAddressOnChange}
                onBlur={handleAddressOnBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="state"
                label="State"
                value={editingAddress.state}
                onChange={handleAddressOnChange}
                onBlur={handleAddressOnBlur}
                type="select"
                options={Object.keys(states)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                name="zipcode"
                label="Zip code"
                value={editingAddress.zipcode}
                placeholder="00000"
                error={editingAddress.errors.zipcode}
                onChange={handleAddressOnChange}
                onBlur={handleAddressOnBlur}
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                name="phone"
                label="Phone number"
                value={editingAddress.formattedPhone}
                error={editingAddress.errors.phone}
                placeholder="(123) 456-7890"
                onChange={handlePhoneOnChange}
                onBlur={e => handleAddressOnBlur(e, 'empty|phone')}
                type="tel"
              />
            </Grid>
          </Grid>
        </>
      )}
      {mode !== 0 && <RoundedBtn onClick={() => setMode(0)}>Save</RoundedBtn>}
      {mode === 0 && (
        <RoundedBtn onClick={handleAddClick}>Add address</RoundedBtn>
      )}
    </AccountLayout>
  )
}

Address.getInitialProps = async function(ctx: any) {
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
