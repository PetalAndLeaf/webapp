import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Hero from '../components/Hero'

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
  padding: 160px 64px 0;
`

interface propsValue {
  children: JSX.Element[] | JSX.Element
}
export default function SplitLayout({ children }: propsValue) {
  return (
    <Main>
      <Aside>
        <Hero />
      </Aside>
      <div>
        <Header />
        {children}
      </div>
    </Main>
  )
}
