import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = styled.main`
  max-width: 100%;
`

interface propsValue {
  children: JSX.Element[] | JSX.Element
  headerType?: string
}
export default function FullWidthLayout({
  children,
  headerType = 'product'
}: propsValue) {
  return (
    <Main>
      <Header type={headerType} />
      {children}
      <Footer />
    </Main>
  )
}
