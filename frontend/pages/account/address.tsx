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
import { onUserProfileChange, updateUserAddress } from '../../lib/db'
import { isEmpty } from 'lodash'
import { AddressToPureObjectArray } from '../../utils/helper'
import Router from 'next/router'

const Header = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const DEFAULT = 0
const EDITTING = 1
const ADDINGNEW = 2

export default function Address() {
  const currentUser = useSelector((state: any) => state.user.currentUser)
  const uid = currentUser ? currentUser.uid : ''
  const [addresses, setAddresses] = useState<AddressFormType[]>([])

  const getAddress = (snapshot: any) => {
    const addressList = snapshot.data().addressList
    addressList && setAddresses(addressList)
  }
  const getAddrErr = (err: any) => {
    console.log(err)
  }

  // 0 - default, 1 - editing, 2 - add new
  const [mode, setMode] = useState(DEFAULT)
  const [editingAddress, setEditingAddress] = useState(new AddressFormType())
  const [editingIndex, setEditingIndex] = useState(-1)

  useEffect(() => {
    onUserProfileChange(uid, getAddress, getAddrErr)
  }, [])

  const handleAddClick = () => {
    setEditingAddress(new AddressFormType())
    setMode(ADDINGNEW)
  }

  const handleEditClick = (addr: any, editingIndex: number) => {
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
    setMode(EDITTING)
    setEditingIndex(editingIndex)
  }

  const handleAddressDelete = (addressIndex: number) => {
    const newAddresses = addresses.slice()
    newAddresses.splice(addressIndex, 1)
    updateUserAddress(uid, AddressToPureObjectArray(newAddresses))
  }

  const handleSetAsDefault = (addressIndex: number) => {
    const newAddresses = addresses.slice()
    newAddresses.forEach((addr: AddressFormType, i: number) => {
      if (i === addressIndex) {
        addr.isDefault = true
      } else {
        addr.isDefault = false
      }
    })
    const defaultAddress = newAddresses[addressIndex]
    newAddresses.splice(addressIndex, 1)
    newAddresses.unshift(defaultAddress)
    updateUserAddress(uid, AddressToPureObjectArray(newAddresses))
  }

  const handleAddressSubmit = (newAddress: AddressFormType) => {
    const newAddresses = addresses.slice()
    if (mode === EDITTING) {
      newAddresses.splice(editingIndex, 1, newAddress)
    } else if (mode === ADDINGNEW) {
      newAddresses.push(newAddress)
    }
    updateUserAddress(uid, AddressToPureObjectArray(newAddresses))
    // console.log('Updates/New address: ', newAddress)
    setMode(DEFAULT)
    setEditingIndex(-1)
    setEditingAddress(new AddressFormType())
  }
  return (
    <AccountLayout>
      <Header>
        <Typography variant='h4'>
          {mode === EDITTING
            ? 'Edit your shipping address'
            : mode === ADDINGNEW
            ? 'Add shipping address'
            : 'Manage your shipping address'}
        </Typography>
      </Header>
      {mode === DEFAULT &&
        !isEmpty(addresses) &&
        (addresses as any).map((addr: any, i: number) => {
          return (
            <AddressBox
              address={addr}
              key={`address-${i}`}
              onEdit={() => handleEditClick(addr, i)}
              onDelete={() => handleAddressDelete(i)}
              onSetAsDefault={() => handleSetAsDefault(i)}
            />
          )
        })}
      {mode !== DEFAULT && (
        <AddressForm
          initAddress={editingAddress}
          submitBtn={{ label: 'Save', handleClick: handleAddressSubmit }}
          handleCancel={() => setMode(DEFAULT)}
        />
      )}

      {mode === DEFAULT && (
        <RoundedBtn onClick={handleAddClick}>Add address</RoundedBtn>
      )}
    </AccountLayout>
  )
}

Address.getInitialProps = async function(ctx: any) {
  const { store, isServer } = ctx
  const { isLoggedin } = store.getState().user
  if (!isLoggedin) {
    if (isServer) {
      ctx.res.writeHead(302, { Location: `/` })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }
  if (isServer) {
    await store.dispatch(setConfig())
    await store.dispatch(setFooter())
  }
  return {
    isServer
  }
}
