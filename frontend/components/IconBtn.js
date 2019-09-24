import React from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import { styles } from '../styles/theme'

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

export default function IconBtn({
  onClick = () => console.log('clicked'),
  icon,
  ...props
}) {
  const feather = require('feather-icons')
  return (
    <Root onClick={onClick} {...props}>
      <SVG
        src={feather.icons[icon].toSvg()}
        style={{ width: 20, height: 20 }}
      />
    </Root>
  )
}
