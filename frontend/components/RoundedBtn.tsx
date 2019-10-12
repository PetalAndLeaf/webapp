import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import { Typography } from '@material-ui/core'

const Root = styled.button`
  height: ${(props: any) => (props.btype === 'large' ? '48px' : '36px')};
  background: ${styles.palette.primary.main};
  cursor: pointer;
  border-radius: ${(props: any) => (props.btype === 'large' ? '24px' : '18px')};
  border: none;
  outline: none;
  text-align: center;
  line-height: ${(props: any) => (props.btype === 'large' ? '48px' : '36px')};
  transition: all 0.2s ease-in-out;
  padding-left: 24px;
  padding-right: 24px;
  color: ${styles.palette.text.primary};
  /* &:hover {
    color: rgba(0, 0, 0, 0.5);
  } */
`

interface propsValue {
  onClick?: () => {}
  btype?: any
  children: any
  className?: any
  moreProps?: any
}

export default function RoundedBtn({
  onClick,
  btype,
  children,
  className,
  moreProps
}: propsValue) {
  return (
    <Root onClick={onClick} btype={btype} className={className} {...moreProps}>
      <Typography
        variant="button"
        style={{
          textTransform: 'none'
        }}
      >
        {children}
      </Typography>
    </Root>
  )
}
