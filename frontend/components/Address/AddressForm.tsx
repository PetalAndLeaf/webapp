import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import RoundedBtn from '../Button/RoundedBtn'
import InputField from '../InputField'
import states from '../../static/data/states_hash.json'
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js'
import { AddressFormType } from '../../utils/types'
import TextBtn from '../Button/TextBtn'

const Container = styled.div`
  max-width: 100%;
`

interface propsValue {
  initAddress?: any
  submitBtn?: {
    label: string
    handleClick: Function
  }
  handleCancel?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}
export default function AddressForm({
  initAddress,
  submitBtn,
  handleCancel
}: propsValue) {
  const [address, setAddress] = useState(initAddress || new AddressFormType())

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
  return (
    <Container>
      <InputField
        name="fullname"
        label="Full Name"
        value={address.fullname}
        placeholder="First and Last Name"
        error={address.errors.fullname}
        onChange={handleAddressOnChange}
        onBlur={handleAddressOnBlur}
      />
      <InputField
        name="line1"
        label="Address line 1"
        value={address.line1}
        placeholder="1000 Main St"
        error={address.errors.line1}
        onChange={handleAddressOnChange}
        onBlur={handleAddressOnBlur}
      />
      <InputField
        name="line2"
        label="Address line 2"
        value={address.line2}
        placeholder="Apt. 1234"
        onChange={handleAddressOnChange}
        optional
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            name="city"
            label="City"
            value={address.city}
            placeholder="San Jose"
            error={address.errors.city}
            onChange={handleAddressOnChange}
            onBlur={handleAddressOnBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="state"
            label="State"
            value={address.state}
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
            value={address.zipcode}
            placeholder="00000"
            error={address.errors.zipcode}
            onChange={handleAddressOnChange}
            onBlur={handleAddressOnBlur}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="phone"
            label="Phone number"
            value={address.formattedPhone}
            error={address.errors.phone}
            placeholder="(123) 456-7890"
            onChange={handlePhoneOnChange}
            onBlur={e => handleAddressOnBlur(e, 'empty|phone')}
            type="tel"
          />
        </Grid>
      </Grid>
      <RoundedBtn
        onClick={() =>
          address.isValid && submitBtn && submitBtn.handleClick(address)
        }
        style={{ marginTop: 16, marginRight: 16 }}
        disabled={!address.isValid}
      >
        {submitBtn ? submitBtn.label : 'Save'}
      </RoundedBtn>
      {handleCancel && <TextBtn onClick={handleCancel}>Cancel</TextBtn>}
    </Container>
  )
}
