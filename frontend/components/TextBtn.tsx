import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles/theme'

const StyledLink = styled.a`
  font-family: ${styles.typography.button.fontFamily};
  font-weight: ${styles.typography.button.fontWeight};
  text-decoration: underline;
  color: ${styles.palette.text.primary};
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${styles.palette.primary.main};
  }
`

interface propsValue {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  style?: any
  children: any
}

export default function TextBtn({ onClick, children, style }: propsValue) {
  return (
    <StyledLink onClick={onClick} style={style}>
      {children}
    </StyledLink>
  )
}
