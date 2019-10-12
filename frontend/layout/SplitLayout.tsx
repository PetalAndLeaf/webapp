import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

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

interface propsValue {
  children: JSX.Element[] | JSX.Element
  headerType?: string
  hideHeader?: boolean
}
export default function SplitLayout({
  children,
  headerType = 'home',
  hideHeader = false
}: propsValue) {
  return (
    <Main>
      <Aside>
        <Hero />
      </Aside>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100vh'
        }}
      >
        {!hideHeader && <Header type={headerType} />}
        {children}
        <Footer />
      </div>
    </Main>
  )
}
