import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { styles } from '../../styles/theme'
import FeatherIcon from '../FeatherIcon'

const Root = styled.button`
  width: 40px;
  height: 40px;
  background: ${(props: any) =>
    props.btype === 'solid' ? styles.palette.primary.main : 'transparent'};
  cursor: pointer;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${(props: any) =>
      props.btype === 'solid' ? styles.palette.text.primary : 'transparent'};
  }
  svg {
    transition: color 0.2s ease-in-out;
  }
  &:hover svg {
    color: ${styles.palette.primary.main};
  }
`

interface propsValue {
  onClick?: Function
  icon: string
  btype?: string
  style?: any
  moreProps?: any
}

const IconBtn = forwardRef(
  ({ onClick, icon, btype = '', style, moreProps }: propsValue, ref: any) => {
    return (
      <Root
        onClick={onClick}
        btype={btype}
        {...moreProps}
        style={style}
        ref={ref}
      >
        <FeatherIcon icon={icon} />
      </Root>
    )
  }
)

export default IconBtn
