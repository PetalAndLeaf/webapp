import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'
import FeatherIcon from './FeatherIcon'

const Root = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;

  svg {
    transition: color 0.2s ease-in-out;
  }
  &:hover svg {
    color: ${styles.palette.primary.main};
  }
`

interface propsValue {
  onClick?: () => {}
  icon: string
  moreProps?: any
}

export default function IconBtn({ onClick, icon, moreProps }: propsValue) {
  return (
    <Root onClick={onClick} {...moreProps}>
      <FeatherIcon icon={icon} />
    </Root>
  )
}
