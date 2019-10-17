import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Typography } from '@material-ui/core'
import { styles } from '../../styles/theme'
import IconBtn from '../Button/IconBtn'
import TextBtn from '../Button/TextBtn'

const Root = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 24px;
  border: 1px solid ${styles.palette.divider};
  position: relative;

  margin-bottom: 24px;
`

const Controls = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
`

interface propsValue {
  address: any
  onEdit: Function
  onDelete: Function
  onSetAsDefault: Function
}
export default function AddressBox({
  address,
  onEdit,
  onDelete,
  onSetAsDefault
}: propsValue) {
  const handleDelete = () => {
    console.log('Delete this address')
    onDelete()
  }
  const handleEdit = () => {
    console.log('Edit this address')
    onEdit()
  }
  const handleSetAsDefault = () => {
    console.log('Set this as default')
    onSetAsDefault()
  }
  return (
    <Root>
      <Typography variant="body2">{address.fullname}</Typography>
      <Typography variant="body2">{`${address.line1}, ${address.line2}`}</Typography>
      <Typography variant="body2">{`${address.city}, ${address.state} ${address.zipcode}`}</Typography>
      <Typography variant="body2">{address.formattedPhone}</Typography>
      {address.isDefault ? (
        <Typography variant="body2">(Default)</Typography>
      ) : (
        <TextBtn onClick={handleSetAsDefault}>Set as default</TextBtn>
      )}
      <Controls>
        <IconBtn icon="edit" onClick={handleEdit} style={{ marginRight: 8 }} />
        <IconBtn icon="delete" onClick={handleDelete} />
      </Controls>
    </Root>
  )
}
