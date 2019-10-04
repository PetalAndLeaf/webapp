import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = styled.main`
  width: 100%;
`

export default function FullWidthLayout({
  Left,
  headerConfig,
  footerLinks,
  children
}) {
  return (
    <Main>
      <Header config={headerConfig} />
      {children}
      <Footer links={footerLinks} />
    </Main>
  )
}
