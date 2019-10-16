import React from 'react'
import styled from 'styled-components'
import { styles } from '../../styles/theme'
import Link from 'next/link'

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
  href: string
  as?: string
  children: any
}

export default function LinkBtn({ href, as = '', children }: propsValue) {
  if (as === '') as = href
  return (
    <Link href={href} as={as}>
      <StyledLink>{children}</StyledLink>
    </Link>
  )
}
