import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import { Typography } from '@material-ui/core'

const Root = styled.div`
  margin-bottom: 16px;
`
const Input = styled.input`
  height: 48px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${styles.palette.grey[300]};
  outline: none;
  padding-left: 16px;
  padding-right: 16px;
  color: ${styles.palette.text.primary};
  font-family: ${styles.typography.fontFamily};
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
  width: 100%;

  &:focus {
    border: 1px solid ${styles.palette.primary.main};
  }
`
const Select = styled.select`
  height: 48px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${styles.palette.grey[300]};
  outline: none;
  padding-left: 16px;
  padding-right: 16px;
  color: ${styles.palette.text.primary};
  font-family: ${styles.typography.fontFamily};
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
  width: 100%;

  &:focus {
    border: 1px solid ${styles.palette.primary.main};
  }
`

interface propsValue {
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  value?: string
  placeholder?: string
  style?: any
  name?: string
  label?: string
  error?: string
  optional?: boolean
  type?: string
  options?: string[]
  moreProps?: any
}

export default function InputField({
  onChange,
  value = '',
  placeholder = '',
  style,
  name,
  onBlur,
  label,
  error = '',
  optional,
  type = '',
  options,
  moreProps
}: propsValue) {
  return (
    <Root style={style} {...moreProps}>
      {label && (
        <Typography variant="h6" style={{ textTransform: 'uppercase' }}>
          {label}
          {optional && (
            <span style={{ color: styles.palette.grey[400] }}>
              &nbsp; Optional
            </span>
          )}
        </Typography>
      )}
      {type === 'select' ? (
        <Select onChange={onChange} value={value} onBlur={onBlur} name={name}>
          {options && <option></option>}
          {options &&
            options.map((option, i) => {
              return (
                <option key={option + i} value={option}>
                  {option}
                </option>
              )
            })}
        </Select>
      ) : (
        <Input
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          name={name}
          type={type}
        ></Input>
      )}

      {error !== '' && (
        <Typography
          variant="caption"
          color="error"
          style={{ display: 'block' }}
        >
          {error}
        </Typography>
      )}
    </Root>
  )
}
