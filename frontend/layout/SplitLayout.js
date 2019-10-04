import React, { useContext } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppContext from '../context/AppContext'

const Main = styled.main`
  max-width: 100%;
  padding-left: 40%;
`
const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  overflow-y: hidden;
  /* background-color: #d9d9d9; */
  padding: 160px 72px 0;
`
export default function SplitLayout({
  Left,
  footerLinks,
  headerConfig = { hide: true },
  children
}) {
  return (
    <Main>
      <Aside>
        <Left />
      </Aside>
      <div>
        {!headerConfig.hide && <Header config={headerConfig} />}
        {children}
        <Footer links={footerLinks} />
      </div>
    </Main>
  )
}
