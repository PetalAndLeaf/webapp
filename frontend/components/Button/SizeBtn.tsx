import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { styles } from '../../styles/theme'
import { Typography } from '@material-ui/core'

const Root = styled.a`
  display: inline-block;
  height: 36px;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid
    ${(props: any) =>
      props.isSelected === true
        ? styles.palette.primary.main
        : styles.palette.grey[300]};
  outline: none;
  text-align: center;
  line-height: 36px;
  transition: all 0.2s ease-in-out;
  padding-left: 16px;
  padding-right: 16px;
  color: ${(props: any) =>
    props.isSelected === true
      ? styles.palette.text.primary
      : styles.palette.text.secondary};
  /* &:hover {
    color: rgba(0, 0, 0, 0.5);
  } */
`

interface propsValue {
  onClick?: Function
  children: any
  className?: any
  isSelected?: boolean
  style?: any
  moreProps?: any
}

const SizeBtn = forwardRef(
  (
    { onClick, children, className, isSelected, style, moreProps }: propsValue,
    ref: any
  ) => {
    return (
      <Root
        onClick={onClick}
        className={className}
        {...moreProps}
        isSelected={isSelected}
        style={style}
        ref={ref}
      >
        <Typography
          variant='button'
          style={{
            textTransform: 'none'
          }}
        >
          {children}
        </Typography>
      </Root>
    )
  }
)

export default SizeBtn
