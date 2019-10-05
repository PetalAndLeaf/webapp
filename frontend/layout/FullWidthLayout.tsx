import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Main = styled.main`
  max-width: 100%;
`

interface propsValue {
  children: JSX.Element[] | JSX.Element
}
export default function FullWidthLayout({ children }: propsValue) {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  )
}
