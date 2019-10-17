import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { styles } from '../../styles/theme'
import { Typography } from '@material-ui/core'
import { motion } from 'framer-motion'

const Root = styled(motion.a)`
  display: inline-block;
  height: ${(props: any) => (props.btype === 'large' ? '48px' : '36px')};
  background: ${(props: any) =>
    props.disabled ? styles.palette.grey[400] : styles.palette.primary.main};
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${(props: any) => (props.btype === 'large' ? '24px' : '18px')};
  border: none;
  outline: none;
  text-align: center;
  line-height: ${(props: any) => (props.btype === 'large' ? '48px' : '36px')};
  transition: all 0.2s ease-in-out;
  padding-left: 24px;
  padding-right: 24px;
  color: ${(props: any) =>
    props.disabled ? '#fff' : styles.palette.text.primary};
  /* &:hover {
    color: rgba(0, 0, 0, 0.5);
  } */
`

interface propsValue {
  onClick?: Function
  btype?: any
  children: any
  className?: any
  disabled?: boolean
  style?: any
  moreProps?: any
}

const RoundedBtn = forwardRef(
  (
    {
      onClick,
      btype,
      children,
      className,
      disabled,
      style,
      moreProps
    }: propsValue,
    ref: any
  ) => {
    return (
      <Root
        onClick={onClick}
        btype={btype}
        className={className}
        {...moreProps}
        disabled={disabled}
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

export default RoundedBtn
