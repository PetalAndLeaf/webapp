import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setConfig, setFooter } from '../../store/content/action'
import { Typography } from '@material-ui/core'
import AccountLayout from '../../layout/AccountLayout'
import styled from 'styled-components'
import RoundedBtn from '../../components/RoundedBtn'
import { AddressFormType } from '../../utils/types'
import { AsYouType } from 'libphonenumber-js'
import AddressBox from '../../components/AddressBox'
import AddressForm from '../../components/AddressForm'

const Header = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
const addressesData = [
  {
    fullname: 'amy pu',
    line1: '550 Moreland Way',
    line2: 'Apt 3309',
    city: 'Santa Clara',
    state: 'CA',
    zipcode: '95054',
    phone: '4709857243',
    isDefault: true
  },
  {
    fullname: 'jian pu',
    line1: '550 Moreland Way',
    line2: 'Apt 3309',
    city: 'Santa Clara',
    state: 'CA',
    zipcode: '95054',
    phone: '2179745227',
    isDefault: false
  }
]
export default function Address() {
  const currentUser = useSelector((state: any) => state.user.currentUser)
  // 0 - default, 1 - editing, 2 - add new
  const [mode, setMode] = useState(0)
  const [addresses, setAddresses] = useState(addressesData)
  const [editingAddress, setEditingAddress] = useState(new AddressFormType())

  useEffect(() => {
    if (currentUser && currentUser.addresses) {
      setAddresses(currentUser.addresses)
    }
  }, [currentUser])

  const handleAddClick = () => {
    setEditingAddress(new AddressFormType())
    setMode(2)
  }

  const handleEditClick = (addr: any) => {
    const formatted = new AsYouType('US').input(addr.phone)

    const currentAddress = new AddressFormType({
      fullname: addr.fullname,
      line1: addr.line1,
      line2: addr.line2 || '',
      city: addr.city,
      state: addr.state,
      zipcode: addr.zipcode,
      phone: addr.phone,
      formattedPhone: formatted,
      isValid: false
    })
    setEditingAddress(currentAddress)
    setMode(1)
  }

  const handleAddressSubmit = (newAddress: any) => {
    console.log('Updates/New address: ', newAddress)
    setMode(0)
  }
  return (
    <AccountLayout>
      <Header>
        <Typography variant='h4'>
          {mode === 1
            ? 'Edit your shipping address'
            : mode === 2
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
        <AddressForm
          initAddress={editingAddress}
          submitBtn={{ label: 'Save', handleClick: handleAddressSubmit }}
          handleCancel={() => setMode(0)}
        />
      )}

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
